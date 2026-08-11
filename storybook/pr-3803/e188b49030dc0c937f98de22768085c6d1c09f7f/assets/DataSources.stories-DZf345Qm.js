import{j as r}from"./iframe-Dn0pOY-8.js";import{O as b}from"./object-table-NN6WWUh5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DKg34BtF.js";import{u as g}from"./useOsdkClient-B0chaxJx.js";import"./preload-helper-D3q3y7aq.js";import"./Table-CcWZ-h4b.js";import"./index-BE-XY2ni.js";import"./Dialog-_kaSvhU6.js";import"./cross-n8lwrCaB.js";import"./svgIconContainer-DTaLY8It.js";import"./useBaseUiId-Do0azpaM.js";import"./InternalBackdrop-CF1SY7QH.js";import"./composite-DS8xZpiv.js";import"./index-DJYmYZuk.js";import"./index-R8QcWJSj.js";import"./index-CU2mmJPH.js";import"./useEventCallback-JlUKJEzf.js";import"./SkeletonBar-xy8Js1OW.js";import"./LoadingCell-BgGGw7-z.js";import"./ColumnConfigDialog-BTHUe9ej.js";import"./DraggableList-DZgHZ0kh.js";import"./search-C3gVcqfq.js";import"./Input-BCcDRsSE.js";import"./useControlled-BI9A7g3Y.js";import"./isEqual-DS8jWXmT.js";import"./isObject-2GYtfsXT.js";import"./Button-CC-Ty1WR.js";import"./ActionButton-B94ichQm.js";import"./Checkbox-9WESJVCu.js";import"./useValueChanged-DcSAkI_F.js";import"./CollapsiblePanel-D1-zf62U.js";import"./MultiColumnSortDialog-B46C9iwB.js";import"./MenuTrigger-BO84EjZc.js";import"./CompositeItem-DLwnYDeG.js";import"./ToolbarRootContext-BWlGQFTf.js";import"./getDisabledMountTransitionStyles-N1RSLi4f.js";import"./getPseudoElementBounds-CzOUzqOM.js";import"./chevron-down-BGIvV33R.js";import"./index-D5xxfjMw.js";import"./error-D8wDGNsv.js";import"./BaseCbacBanner-C7kDrPBm.js";import"./makeExternalStore-Dqwllyj5.js";import"./Tooltip-MaTCI-y-.js";import"./PopoverPopup-Bdypen72.js";import"./toNumber-C9JJp1LT.js";import"./tick-C_RFRraQ.js";import"./DropdownField-DhaM22xE.js";import"./withOsdkMetrics-LKNyPTl9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
