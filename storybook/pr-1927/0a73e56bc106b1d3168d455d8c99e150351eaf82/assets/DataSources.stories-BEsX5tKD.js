import{j as r}from"./iframe-DWzyCbmQ.js";import{O as b}from"./object-table-CuSbRsH6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DuSQ5qQ6.js";import{u as g}from"./useOsdkClient-IU3Q42Y8.js";import"./preload-helper-2jyftVZw.js";import"./Table-CldaYRDR.js";import"./index-Cqwfu9kN.js";import"./Dialog-Cn_zgyMr.js";import"./cross-jZI8Hr1l.js";import"./svgIconContainer-BK_aTV-8.js";import"./useBaseUiId-b2rVpvoU.js";import"./InternalBackdrop-QBE1MHKB.js";import"./composite-BeGq1JGD.js";import"./index-BMaMWApL.js";import"./index-DLztW5cy.js";import"./index-aFeDMRyf.js";import"./useEventCallback-D6jFJjCm.js";import"./SkeletonBar-CtISM4-l.js";import"./LoadingCell-Yj4teP7m.js";import"./ColumnConfigDialog-B0uDq8E7.js";import"./DraggableList-CvU5Locf.js";import"./search-Bri7tWXH.js";import"./Input-YoY-WOGN.js";import"./useControlled-BLqnPlES.js";import"./isEqual-CDh5I7Rn.js";import"./isObject-DdD35Osw.js";import"./Button-BSivVUu-.js";import"./ActionButton-OprUQE1o.js";import"./Checkbox-BfZCPL-_.js";import"./useValueChanged-BBo06APQ.js";import"./CollapsiblePanel-CA-wr5VW.js";import"./MultiColumnSortDialog-CkHucyAD.js";import"./MenuTrigger-CEc8SZAK.js";import"./CompositeItem-Cg2la_5O.js";import"./ToolbarRootContext-CVS0gqd_.js";import"./getDisabledMountTransitionStyles-Bc1sqap-.js";import"./getPseudoElementBounds-Dv2ufZV-.js";import"./chevron-down-CbMtKpux.js";import"./index-X_CuuTrt.js";import"./error-CexwmIKl.js";import"./BaseCbacBanner-B-8aAE9P.js";import"./makeExternalStore-B2gIhY2Q.js";import"./Tooltip-C0YkhHOA.js";import"./PopoverPopup-AybO48ar.js";import"./toNumber-DXAgYOST.js";import"./tick-DxexBsqd.js";import"./DropdownField-CE6YHtPo.js";import"./withOsdkMetrics-CvyFQccR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
