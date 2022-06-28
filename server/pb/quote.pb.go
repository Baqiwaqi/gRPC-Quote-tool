// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: quote.proto

package quote_service

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type QuoteService struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *QuoteService) Reset() {
	*x = QuoteService{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService) ProtoMessage() {}

func (x *QuoteService) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService.ProtoReflect.Descriptor instead.
func (*QuoteService) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0}
}

type QuoteService_Quote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              string                        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Carrier         string                        `protobuf:"bytes,2,opt,name=carrier,proto3" json:"carrier,omitempty"`
	Customer        string                        `protobuf:"bytes,3,opt,name=customer,proto3" json:"customer,omitempty"`
	CustomerRef     string                        `protobuf:"bytes,4,opt,name=customer_ref,json=customerRef,proto3" json:"customer_ref,omitempty"`
	CustomerContact *QuoteService_CustomerContact `protobuf:"bytes,5,opt,name=customer_contact,json=customerContact,proto3" json:"customer_contact,omitempty"`
	AvailableDate   int64                         `protobuf:"varint,6,opt,name=availableDate,proto3" json:"availableDate,omitempty"`
	Product         string                        `protobuf:"bytes,7,opt,name=product,proto3" json:"product,omitempty"`
	CollectFrom     string                        `protobuf:"bytes,8,opt,name=collectFrom,proto3" json:"collectFrom,omitempty"`
	Origin          string                        `protobuf:"bytes,9,opt,name=origin,proto3" json:"origin,omitempty"`
	Destination     string                        `protobuf:"bytes,10,opt,name=destination,proto3" json:"destination,omitempty"`
	CargoType       string                        `protobuf:"bytes,11,opt,name=cargoType,proto3" json:"cargoType,omitempty"`
	IsDangerous     bool                          `protobuf:"varint,12,opt,name=isDangerous,proto3" json:"isDangerous,omitempty"`
	CanBeTurned     bool                          `protobuf:"varint,13,opt,name=canBeTurned,proto3" json:"canBeTurned,omitempty"`
	IsKnown         bool                          `protobuf:"varint,14,opt,name=isKnown,proto3" json:"isKnown,omitempty"`
	AircraftOnly    bool                          `protobuf:"varint,15,opt,name=aircraftOnly,proto3" json:"aircraftOnly,omitempty"`
	Description     string                        `protobuf:"bytes,16,opt,name=description,proto3" json:"description,omitempty"`
	SizeMetric      string                        `protobuf:"bytes,17,opt,name=sizeMetric,proto3" json:"sizeMetric,omitempty"`
	WeightMetric    string                        `protobuf:"bytes,18,opt,name=weightMetric,proto3" json:"weightMetric,omitempty"`
	Cargo           *QuoteService_Cargo           `protobuf:"bytes,19,opt,name=cargo,proto3" json:"cargo,omitempty"`
	Rate            *QuoteService_Rate            `protobuf:"bytes,20,opt,name=rate,proto3" json:"rate,omitempty"`
}

func (x *QuoteService_Quote) Reset() {
	*x = QuoteService_Quote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_Quote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_Quote) ProtoMessage() {}

func (x *QuoteService_Quote) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_Quote.ProtoReflect.Descriptor instead.
func (*QuoteService_Quote) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 0}
}

func (x *QuoteService_Quote) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *QuoteService_Quote) GetCarrier() string {
	if x != nil {
		return x.Carrier
	}
	return ""
}

func (x *QuoteService_Quote) GetCustomer() string {
	if x != nil {
		return x.Customer
	}
	return ""
}

func (x *QuoteService_Quote) GetCustomerRef() string {
	if x != nil {
		return x.CustomerRef
	}
	return ""
}

func (x *QuoteService_Quote) GetCustomerContact() *QuoteService_CustomerContact {
	if x != nil {
		return x.CustomerContact
	}
	return nil
}

func (x *QuoteService_Quote) GetAvailableDate() int64 {
	if x != nil {
		return x.AvailableDate
	}
	return 0
}

func (x *QuoteService_Quote) GetProduct() string {
	if x != nil {
		return x.Product
	}
	return ""
}

func (x *QuoteService_Quote) GetCollectFrom() string {
	if x != nil {
		return x.CollectFrom
	}
	return ""
}

func (x *QuoteService_Quote) GetOrigin() string {
	if x != nil {
		return x.Origin
	}
	return ""
}

func (x *QuoteService_Quote) GetDestination() string {
	if x != nil {
		return x.Destination
	}
	return ""
}

func (x *QuoteService_Quote) GetCargoType() string {
	if x != nil {
		return x.CargoType
	}
	return ""
}

func (x *QuoteService_Quote) GetIsDangerous() bool {
	if x != nil {
		return x.IsDangerous
	}
	return false
}

func (x *QuoteService_Quote) GetCanBeTurned() bool {
	if x != nil {
		return x.CanBeTurned
	}
	return false
}

func (x *QuoteService_Quote) GetIsKnown() bool {
	if x != nil {
		return x.IsKnown
	}
	return false
}

func (x *QuoteService_Quote) GetAircraftOnly() bool {
	if x != nil {
		return x.AircraftOnly
	}
	return false
}

func (x *QuoteService_Quote) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *QuoteService_Quote) GetSizeMetric() string {
	if x != nil {
		return x.SizeMetric
	}
	return ""
}

func (x *QuoteService_Quote) GetWeightMetric() string {
	if x != nil {
		return x.WeightMetric
	}
	return ""
}

func (x *QuoteService_Quote) GetCargo() *QuoteService_Cargo {
	if x != nil {
		return x.Cargo
	}
	return nil
}

func (x *QuoteService_Quote) GetRate() *QuoteService_Rate {
	if x != nil {
		return x.Rate
	}
	return nil
}

type QuoteService_CustomerContact struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Phone string `protobuf:"bytes,3,opt,name=phone,proto3" json:"phone,omitempty"`
	Email string `protobuf:"bytes,4,opt,name=email,proto3" json:"email,omitempty"`
}

func (x *QuoteService_CustomerContact) Reset() {
	*x = QuoteService_CustomerContact{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_CustomerContact) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_CustomerContact) ProtoMessage() {}

func (x *QuoteService_CustomerContact) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_CustomerContact.ProtoReflect.Descriptor instead.
func (*QuoteService_CustomerContact) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 1}
}

func (x *QuoteService_CustomerContact) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *QuoteService_CustomerContact) GetPhone() string {
	if x != nil {
		return x.Phone
	}
	return ""
}

func (x *QuoteService_CustomerContact) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

type QuoteService_Cargo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pieces      int64 `protobuf:"varint,1,opt,name=pieces,proto3" json:"pieces,omitempty"`
	Length      int64 `protobuf:"varint,2,opt,name=length,proto3" json:"length,omitempty"`
	Width       int64 `protobuf:"varint,3,opt,name=width,proto3" json:"width,omitempty"`
	Height      int64 `protobuf:"varint,4,opt,name=height,proto3" json:"height,omitempty"`
	GrossWeight int64 `protobuf:"varint,5,opt,name=grossWeight,proto3" json:"grossWeight,omitempty"`
}

func (x *QuoteService_Cargo) Reset() {
	*x = QuoteService_Cargo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_Cargo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_Cargo) ProtoMessage() {}

func (x *QuoteService_Cargo) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_Cargo.ProtoReflect.Descriptor instead.
func (*QuoteService_Cargo) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 2}
}

func (x *QuoteService_Cargo) GetPieces() int64 {
	if x != nil {
		return x.Pieces
	}
	return 0
}

func (x *QuoteService_Cargo) GetLength() int64 {
	if x != nil {
		return x.Length
	}
	return 0
}

func (x *QuoteService_Cargo) GetWidth() int64 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *QuoteService_Cargo) GetHeight() int64 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *QuoteService_Cargo) GetGrossWeight() int64 {
	if x != nil {
		return x.GrossWeight
	}
	return 0
}

type QuoteService_Rate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	On        string  `protobuf:"bytes,1,opt,name=on,proto3" json:"on,omitempty"`
	CostMin   float32 `protobuf:"fixed32,2,opt,name=costMin,proto3" json:"costMin,omitempty"`
	CostRate  float32 `protobuf:"fixed32,3,opt,name=costRate,proto3" json:"costRate,omitempty"`
	SalesMin  float32 `protobuf:"fixed32,4,opt,name=salesMin,proto3" json:"salesMin,omitempty"`
	SalesRate float32 `protobuf:"fixed32,5,opt,name=salesRate,proto3" json:"salesRate,omitempty"`
	Currency  string  `protobuf:"bytes,6,opt,name=currency,proto3" json:"currency,omitempty"`
}

func (x *QuoteService_Rate) Reset() {
	*x = QuoteService_Rate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_Rate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_Rate) ProtoMessage() {}

func (x *QuoteService_Rate) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_Rate.ProtoReflect.Descriptor instead.
func (*QuoteService_Rate) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 3}
}

func (x *QuoteService_Rate) GetOn() string {
	if x != nil {
		return x.On
	}
	return ""
}

func (x *QuoteService_Rate) GetCostMin() float32 {
	if x != nil {
		return x.CostMin
	}
	return 0
}

func (x *QuoteService_Rate) GetCostRate() float32 {
	if x != nil {
		return x.CostRate
	}
	return 0
}

func (x *QuoteService_Rate) GetSalesMin() float32 {
	if x != nil {
		return x.SalesMin
	}
	return 0
}

func (x *QuoteService_Rate) GetSalesRate() float32 {
	if x != nil {
		return x.SalesRate
	}
	return 0
}

func (x *QuoteService_Rate) GetCurrency() string {
	if x != nil {
		return x.Currency
	}
	return ""
}

type QuoteService_NoParams struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *QuoteService_NoParams) Reset() {
	*x = QuoteService_NoParams{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_NoParams) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_NoParams) ProtoMessage() {}

func (x *QuoteService_NoParams) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_NoParams.ProtoReflect.Descriptor instead.
func (*QuoteService_NoParams) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 4}
}

// v1
type QuoteService_QuoteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *QuoteService_QuoteRequest) Reset() {
	*x = QuoteService_QuoteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_QuoteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_QuoteRequest) ProtoMessage() {}

func (x *QuoteService_QuoteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_QuoteRequest.ProtoReflect.Descriptor instead.
func (*QuoteService_QuoteRequest) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 5}
}

func (x *QuoteService_QuoteRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type QuoteService_QuoteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Quote *QuoteService_Quote `protobuf:"bytes,1,opt,name=quote,proto3" json:"quote,omitempty"`
}

func (x *QuoteService_QuoteResponse) Reset() {
	*x = QuoteService_QuoteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quote_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuoteService_QuoteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuoteService_QuoteResponse) ProtoMessage() {}

func (x *QuoteService_QuoteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quote_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuoteService_QuoteResponse.ProtoReflect.Descriptor instead.
func (*QuoteService_QuoteResponse) Descriptor() ([]byte, []int) {
	return file_quote_proto_rawDescGZIP(), []int{0, 6}
}

func (x *QuoteService_QuoteResponse) GetQuote() *QuoteService_Quote {
	if x != nil {
		return x.Quote
	}
	return nil
}

var File_quote_proto protoreflect.FileDescriptor

var file_quote_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x71,
	0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x22, 0xd2, 0x09, 0x0a, 0x0c, 0x51, 0x75, 0x6f,
	0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0xcd, 0x05, 0x0a, 0x05, 0x51, 0x75,
	0x6f, 0x74, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x12, 0x1a, 0x0a,
	0x08, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x75, 0x73,
	0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x72, 0x65, 0x66, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x66, 0x12, 0x52, 0x0a, 0x10,
	0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f,
	0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x52,
	0x0f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74,
	0x12, 0x24, 0x0a, 0x0d, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62, 0x6c, 0x65, 0x44, 0x61, 0x74,
	0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62,
	0x6c, 0x65, 0x44, 0x61, 0x74, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x12, 0x20, 0x0a, 0x0b, 0x63, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x46, 0x72, 0x6f, 0x6d, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x46, 0x72,
	0x6f, 0x6d, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65,
	0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x09,
	0x63, 0x61, 0x72, 0x67, 0x6f, 0x54, 0x79, 0x70, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x63, 0x61, 0x72, 0x67, 0x6f, 0x54, 0x79, 0x70, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x69, 0x73,
	0x44, 0x61, 0x6e, 0x67, 0x65, 0x72, 0x6f, 0x75, 0x73, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0b, 0x69, 0x73, 0x44, 0x61, 0x6e, 0x67, 0x65, 0x72, 0x6f, 0x75, 0x73, 0x12, 0x20, 0x0a, 0x0b,
	0x63, 0x61, 0x6e, 0x42, 0x65, 0x54, 0x75, 0x72, 0x6e, 0x65, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x0b, 0x63, 0x61, 0x6e, 0x42, 0x65, 0x54, 0x75, 0x72, 0x6e, 0x65, 0x64, 0x12, 0x18,
	0x0a, 0x07, 0x69, 0x73, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x07, 0x69, 0x73, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x12, 0x22, 0x0a, 0x0c, 0x61, 0x69, 0x72, 0x63,
	0x72, 0x61, 0x66, 0x74, 0x4f, 0x6e, 0x6c, 0x79, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c,
	0x61, 0x69, 0x72, 0x63, 0x72, 0x61, 0x66, 0x74, 0x4f, 0x6e, 0x6c, 0x79, 0x12, 0x20, 0x0a, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x10, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1e,
	0x0a, 0x0a, 0x73, 0x69, 0x7a, 0x65, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x18, 0x11, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x73, 0x69, 0x7a, 0x65, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x12, 0x22,
	0x0a, 0x0c, 0x77, 0x65, 0x69, 0x67, 0x68, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x18, 0x12,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x77, 0x65, 0x69, 0x67, 0x68, 0x74, 0x4d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x12, 0x33, 0x0a, 0x05, 0x63, 0x61, 0x72, 0x67, 0x6f, 0x18, 0x13, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1d, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75,
	0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x43, 0x61, 0x72, 0x67, 0x6f,
	0x52, 0x05, 0x63, 0x61, 0x72, 0x67, 0x6f, 0x12, 0x30, 0x0a, 0x04, 0x72, 0x61, 0x74, 0x65, 0x18,
	0x14, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f,
	0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x52,
	0x61, 0x74, 0x65, 0x52, 0x04, 0x72, 0x61, 0x74, 0x65, 0x1a, 0x51, 0x0a, 0x0f, 0x43, 0x75, 0x73,
	0x74, 0x6f, 0x6d, 0x65, 0x72, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x1a, 0x87, 0x01, 0x0a,
	0x05, 0x43, 0x61, 0x72, 0x67, 0x6f, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x69, 0x65, 0x63, 0x65, 0x73,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x70, 0x69, 0x65, 0x63, 0x65, 0x73, 0x12, 0x16,
	0x0a, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06,
	0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x16, 0x0a, 0x06,
	0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x68, 0x65,
	0x69, 0x67, 0x68, 0x74, 0x12, 0x20, 0x0a, 0x0b, 0x67, 0x72, 0x6f, 0x73, 0x73, 0x57, 0x65, 0x69,
	0x67, 0x68, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x67, 0x72, 0x6f, 0x73, 0x73,
	0x57, 0x65, 0x69, 0x67, 0x68, 0x74, 0x1a, 0xa2, 0x01, 0x0a, 0x04, 0x52, 0x61, 0x74, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x6f, 0x6e, 0x12,
	0x18, 0x0a, 0x07, 0x63, 0x6f, 0x73, 0x74, 0x4d, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02,
	0x52, 0x07, 0x63, 0x6f, 0x73, 0x74, 0x4d, 0x69, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x6f, 0x73,
	0x74, 0x52, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x63, 0x6f, 0x73,
	0x74, 0x52, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x4d, 0x69,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x4d, 0x69,
	0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x61, 0x74, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x02, 0x52, 0x09, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x61, 0x74, 0x65, 0x12,
	0x1a, 0x0a, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x1a, 0x0a, 0x0a, 0x08, 0x4e,
	0x6f, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x1a, 0x1e, 0x0a, 0x0c, 0x51, 0x75, 0x6f, 0x74, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x1a, 0x44, 0x0a, 0x0d, 0x51, 0x75, 0x6f, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x05, 0x71, 0x75, 0x6f, 0x74,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54,
	0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x05, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x32, 0xf4, 0x02,
	0x0a, 0x09, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x12, 0x57, 0x0a, 0x08, 0x47,
	0x65, 0x74, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x12, 0x24, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54,
	0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e,
	0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x56, 0x0a, 0x0b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75,
	0x6f, 0x74, 0x65, 0x12, 0x20, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e,
	0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4e, 0x6f, 0x50,
	0x61, 0x72, 0x61, 0x6d, 0x73, 0x1a, 0x25, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f,
	0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51,
	0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5a, 0x0a, 0x0b,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x12, 0x24, 0x2e, 0x71, 0x75,
	0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x25, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75,
	0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5a, 0x0a, 0x0b, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x12, 0x24, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x65, 0x54,
	0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e,
	0x71, 0x75, 0x6f, 0x74, 0x65, 0x54, 0x6f, 0x6f, 0x6c, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x42, 0x23, 0x5a, 0x21, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x62, 0x61, 0x71, 0x69, 0x77, 0x61, 0x71, 0x69, 0x2f, 0x71, 0x75, 0x6f, 0x74,
	0x65, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_quote_proto_rawDescOnce sync.Once
	file_quote_proto_rawDescData = file_quote_proto_rawDesc
)

func file_quote_proto_rawDescGZIP() []byte {
	file_quote_proto_rawDescOnce.Do(func() {
		file_quote_proto_rawDescData = protoimpl.X.CompressGZIP(file_quote_proto_rawDescData)
	})
	return file_quote_proto_rawDescData
}

var file_quote_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_quote_proto_goTypes = []interface{}{
	(*QuoteService)(nil),                 // 0: quoteTool.QuoteService
	(*QuoteService_Quote)(nil),           // 1: quoteTool.QuoteService.Quote
	(*QuoteService_CustomerContact)(nil), // 2: quoteTool.QuoteService.CustomerContact
	(*QuoteService_Cargo)(nil),           // 3: quoteTool.QuoteService.Cargo
	(*QuoteService_Rate)(nil),            // 4: quoteTool.QuoteService.Rate
	(*QuoteService_NoParams)(nil),        // 5: quoteTool.QuoteService.NoParams
	(*QuoteService_QuoteRequest)(nil),    // 6: quoteTool.QuoteService.QuoteRequest
	(*QuoteService_QuoteResponse)(nil),   // 7: quoteTool.QuoteService.QuoteResponse
}
var file_quote_proto_depIdxs = []int32{
	2, // 0: quoteTool.QuoteService.Quote.customer_contact:type_name -> quoteTool.QuoteService.CustomerContact
	3, // 1: quoteTool.QuoteService.Quote.cargo:type_name -> quoteTool.QuoteService.Cargo
	4, // 2: quoteTool.QuoteService.Quote.rate:type_name -> quoteTool.QuoteService.Rate
	1, // 3: quoteTool.QuoteService.QuoteResponse.quote:type_name -> quoteTool.QuoteService.Quote
	6, // 4: quoteTool.QuoteTool.GetQuote:input_type -> quoteTool.QuoteService.QuoteRequest
	5, // 5: quoteTool.QuoteTool.CreateQuote:input_type -> quoteTool.QuoteService.NoParams
	6, // 6: quoteTool.QuoteTool.UpdateQuote:input_type -> quoteTool.QuoteService.QuoteRequest
	6, // 7: quoteTool.QuoteTool.DeleteQuote:input_type -> quoteTool.QuoteService.QuoteRequest
	7, // 8: quoteTool.QuoteTool.GetQuote:output_type -> quoteTool.QuoteService.QuoteResponse
	7, // 9: quoteTool.QuoteTool.CreateQuote:output_type -> quoteTool.QuoteService.QuoteResponse
	7, // 10: quoteTool.QuoteTool.UpdateQuote:output_type -> quoteTool.QuoteService.QuoteResponse
	7, // 11: quoteTool.QuoteTool.DeleteQuote:output_type -> quoteTool.QuoteService.QuoteResponse
	8, // [8:12] is the sub-list for method output_type
	4, // [4:8] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_quote_proto_init() }
func file_quote_proto_init() {
	if File_quote_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_quote_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_Quote); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_CustomerContact); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_Cargo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_Rate); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_NoParams); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_QuoteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quote_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuoteService_QuoteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_quote_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_quote_proto_goTypes,
		DependencyIndexes: file_quote_proto_depIdxs,
		MessageInfos:      file_quote_proto_msgTypes,
	}.Build()
	File_quote_proto = out.File
	file_quote_proto_rawDesc = nil
	file_quote_proto_goTypes = nil
	file_quote_proto_depIdxs = nil
}
