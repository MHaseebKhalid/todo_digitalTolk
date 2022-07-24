import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
import images  from '../../assets/images';

export class AppInput extends React.Component {
  render() {
    let style = this.props.style;
    let shadow = this.props.shadow;

    let height = this.props.height || hp(7);
    let width = this.props.width || '95%';

    let marginTop = this.props.marginTop || 0;
    let marginBottom = this.props.marginBottom;
    let marginLeft = this.props.marginLeft;
    let marginRight = this.props.marginRight;

    let paddingLeft = this.props.paddingLeft || '0%';
    let paddingRight = this.props.paddingRight || '0%';
    let paddingTop = this.props.paddingTop || '0%';
    let paddingBottom = this.props.paddingBottom || '0%';

    let borderColor = this.props.borderColor; //|| colors.placeholder_text_color;
    let borderWidth = this.props.borderWidth;
    let borderRadius = this.props.borderRadius;

    let backgroundColor = this.props.backgroundColor || Colors.lightGrey;

    let rightIconSize = this.props.rightIconSize || hp(2.5);
    let leftImageHeight = this.props.leftImageHeight || hp(3);
    let leftImageWidth = this.props.leftImageWidth || hp(3);

    return (
      <View
        style={[
          { marginTop: marginTop, width: width,alignSelf:"center" },
          !this.props.title && {
            height: height,
            paddingBottom: paddingBottom,
            marginBottom: marginBottom,
            paddingTop: paddingTop,
            backgroundColor: backgroundColor,
            paddingLeft: paddingLeft,
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius: borderRadius,
          },
        ]}
      >
        {this.props.title && (
          <Text
            style={{
              fontSize: 12,
              color: Colors.grey,
            }}
          >
            {this.props.title}
          </Text>
        )}
        <View
          style={[
            styles.inputFieldTextView,
            shadow,
            style,
            {
              height: height,
              width: "100%",
              marginTop: this.props.title ? 5 : 0,
              paddingBottom: paddingBottom,
              marginBottom: marginBottom,
              paddingTop: paddingTop,
              backgroundColor: backgroundColor,
              paddingLeft: paddingLeft,
              borderWidth: borderWidth,
              borderColor: borderColor,
              borderRadius: borderRadius,
            },
          ]}
        >
          {this.props.leftIconPath !== undefined && (
            <View style={styles.leftImageViewStyle}>
              <Image
                style={
                  this.props.imageStyle !== undefined
                    ? this.props.imageStyle
                    : {
                      height: leftImageHeight,
                      width: leftImageWidth,
                      resizeMode: 'contain',
                      marginLeft: '3%',
                      tintColor: this.props.tintColor, //|| colors.placeholder_text_color,
                    }
                }
                source={this.props.leftIconPath}
              />
            </View>
          )}
          <View style={{ paddingLeft: wp(0), flex: 0.95 }}>
            {this.props.heading && (
              <Text style={this.props.headingStyle}>{this.props.heading}</Text>
            )}
            <TextInput
              numberOfLines={1}
              value={this.props.value}
              secureTextEntry={this.props.secureEntry}
              style={[
                styles.inputFieldText,
                this.props.textInputStyle,
                {
                  padding: 0,
                  fontFamily: this.props.fontFamily,
                  fontSize: this.props.fontSize || 16,
                  color: this.props.colortextInput, //|| colors.black,
                  // paddingLeft: this.props.paddingLeftText || "3%",
                },
              ]}
              onChangeText={this.props.onChangeText}
              autoCapitalize="none"
              placeholder={this.props.placeholder}
              placeholderTextColor={
                this.props.placeholderTextColor
                  ? this.props.placeholderTextColor
                  : '#72757E'
              }
              testID={this.props.testID}
              onSubmitEditing={this.props.onSubmitEditing}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
              ref={this.props.ref}
              multiline={this.props.multiline}
              maxLength={this.props.maxLength}
              maxHeight={this.props.maxHeight}
              autoGrow={this.props.autoGrow}
              onContentSizeChange={this.props.onContentSizeChange}
              onEndEditing={this.props.onEndEditing}
              keyboardType={this.props.keyboardType}
              editable={this.props.editable}
              onChange={this.props.onChange}
              returnKeyType={this.props.returnKeyType}
            />
          </View>
          {this.props.rightIconPath !== undefined && (
            <TouchableWithoutFeedback onPress={this.props.onRightIconPress}>
              <Image
                source={this.props.rightIconPath}
                style={{
                  height: rightIconSize,
                  width: rightIconSize,
                  resizeMode: 'contain',
                  tintColor: this.props.tintColor,
                }}
              />
            </TouchableWithoutFeedback>
          )}
          {this.props.showLoading && (
            <ActivityIndicator size={'small'} color={Colors.grey} />
          )}
        </View>
        {this.props.Error && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width,
              marginVertical:hp(1)
            }}
          >
            <Image
              source={images.info}
              resizeMode="contain"
              style={{
                height: hp(1.7),
                width: hp(1.7),
                resizeMode: 'contain',
                marginRight: 5,
                marginTop: 2,
                tintColor: 'red',
              }}
            />
            <Text style={{ color: 'red', maxWidth: '95%' }}>
              {this.props.errorMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: "90%",
    // height:wp(7),
    alignSelf: 'center',
    // backgroundColor:Colors.clight
  },
  inputFieldText: {
    fontSize: 16,
    color: '#000000', //colors.black,
    paddingHorizontal: wp(4),
  },
  leftImageViewStyle: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(0),
    // borderRightColor:colors.grey,
    // borderRightWidth:wp(0.1),
  },
});