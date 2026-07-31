import{j as r}from"./iframe-BCELjueD.js";import{O as b}from"./object-table-DMWVrhnd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-uy7bkh5m.js";import{u as g}from"./useOsdkClient-CdRIrwcN.js";import"./preload-helper-DhWtn3bd.js";import"./Table-h2VOON-p.js";import"./index-C2TWSJNn.js";import"./Dialog-Kr_5kPqy.js";import"./cross-DW9P7-kS.js";import"./svgIconContainer-D7r98AQf.js";import"./useBaseUiId-D2ilU-eW.js";import"./InternalBackdrop-DPTCUhCM.js";import"./composite-CFY-6VGT.js";import"./index-Co75qXW3.js";import"./index-BlGT_yiJ.js";import"./index-wUO7vjRD.js";import"./useEventCallback-BMAoa6Kg.js";import"./SkeletonBar-WkRd0IJo.js";import"./LoadingCell-CifpqLIM.js";import"./ColumnConfigDialog-DVHDV22f.js";import"./DraggableList-D1Gl-i5A.js";import"./search-Dw0OYTHR.js";import"./Input-B-GyiHFv.js";import"./useControlled-B6AglnsA.js";import"./isEqual-D6qOE7p_.js";import"./isObject-TZ77QRHx.js";import"./Button-DU1F4Snx.js";import"./ActionButton-Dqt-OOcW.js";import"./Checkbox-BYJtT0-D.js";import"./useValueChanged-D9Uj0vyL.js";import"./CollapsiblePanel-CAQsd2_r.js";import"./MultiColumnSortDialog-DXXa-HpH.js";import"./MenuTrigger-CGENzWRQ.js";import"./CompositeItem-qaPcSWJy.js";import"./ToolbarRootContext-C2W--ksY.js";import"./getDisabledMountTransitionStyles-nPzqkM6Q.js";import"./getPseudoElementBounds-CmuVA6fm.js";import"./chevron-down-QNpM5_Fh.js";import"./index-DrjK6CU8.js";import"./error-BslijzYM.js";import"./BaseCbacBanner-brOXDsBd.js";import"./makeExternalStore-BcTaJpz8.js";import"./Tooltip--BjEjPFB.js";import"./PopoverPopup-BFC5dokD.js";import"./toNumber-uWSCtnJ6.js";import"./tick-CAbm98cs.js";import"./DropdownField-ClPabGQC.js";import"./withOsdkMetrics-CLAhbfws.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
