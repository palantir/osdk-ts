import{j as r}from"./iframe-u7IuoPqS.js";import{O as b}from"./object-table-CwiiGrwV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDfn1T4e.js";import{u as g}from"./useOsdkClient-DIYDfnUU.js";import"./preload-helper-Cj56MnTO.js";import"./Table-Di4wiE30.js";import"./index-BoeQsLqp.js";import"./Dialog-CpvXnFfZ.js";import"./cross-C6E9vWMV.js";import"./svgIconContainer-B7-2IFM8.js";import"./useBaseUiId-BbTWfvqf.js";import"./InternalBackdrop-B6YckNyz.js";import"./composite-CN58o8c7.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./index-BpkgF5rv.js";import"./useEventCallback-CKntwpr7.js";import"./SkeletonBar-D7FcAjBa.js";import"./LoadingCell-C7rWRneL.js";import"./ColumnConfigDialog-DmWSH25A.js";import"./DraggableList-DhymAh2k.js";import"./search-DFsiEXmE.js";import"./Input-zHybezEW.js";import"./useControlled-Bz9okVK9.js";import"./Button-CvzuhgBL.js";import"./small-cross-DaEkKO8E.js";import"./ActionButton-C24F2_0f.js";import"./Checkbox-Dqft24kT.js";import"./useValueChanged-IctLC50s.js";import"./CollapsiblePanel-BXTP71-2.js";import"./MultiColumnSortDialog-wCdTEjlb.js";import"./MenuTrigger-Z8BjAXwH.js";import"./CompositeItem-KI1SOpIs.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./getDisabledMountTransitionStyles-CiLgfWr9.js";import"./getPseudoElementBounds-cKkhOfCl.js";import"./chevron-down-J58PJfTC.js";import"./index-B0Ziw4xI.js";import"./error-BqAhf9VK.js";import"./BaseCbacBanner-DPrwyNKc.js";import"./makeExternalStore-BUehwWYZ.js";import"./Tooltip-JWOTsvNT.js";import"./PopoverPopup-C4ZXIBTy.js";import"./debounce-IxsrJnss.js";import"./tick-D6HWtL2J.js";import"./DropdownField-BUflj4ln.js";import"./isEqual-BWjeHkq7.js";import"./withOsdkMetrics-myAMZpO7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
