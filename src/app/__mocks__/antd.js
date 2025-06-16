const antd = jest.requireActual('antd')

module.exports = {
  ...antd,
  Form: {
    ...antd.Form,
    useForm: () => [
      {
        validateFields: jest.fn().mockResolvedValue({
          fullName: 'John Doe',
          email: 'john@example.com',
          subject: 'Test Subject',
          message: 'Test Message',
        }),
        resetFields: jest.fn(),
      },
    ],
  },
  message: {
    success: jest.fn(),
    error: jest.fn(),
  },
} 