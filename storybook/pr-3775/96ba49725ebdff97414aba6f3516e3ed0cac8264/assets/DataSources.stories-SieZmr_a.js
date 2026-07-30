import{j as r}from"./iframe-aCq_g3w6.js";import{O as b}from"./object-table-CaKMIAxT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGYyVwMa.js";import{u as g}from"./useOsdkClient-DqFKaHTk.js";import"./preload-helper-UUSxO84G.js";import"./Table-BhZHm77h.js";import"./index-CSsMTEyY.js";import"./Dialog-Bk6m_fk0.js";import"./cross-BrgA3kIi.js";import"./svgIconContainer-BOv-jsG1.js";import"./useBaseUiId-BNG6DLH2.js";import"./InternalBackdrop-DFFqIJam.js";import"./composite-BGN3oFgJ.js";import"./index-CxZEKvWq.js";import"./index-2UiSVRF4.js";import"./index-BjzHZnVv.js";import"./useEventCallback-DqEZkPls.js";import"./SkeletonBar-B_KPnLrt.js";import"./LoadingCell-CrBCJB-_.js";import"./ColumnConfigDialog-fedxKc44.js";import"./DraggableList-DOf8Psv5.js";import"./search-DwsH7dY2.js";import"./Input-KoZ5HftR.js";import"./useControlled-C35FdDTC.js";import"./isEqual-DKuKDDtE.js";import"./isObject-DU3nP88y.js";import"./Button-CSGA2Wxl.js";import"./ActionButton-CIToBB-6.js";import"./Checkbox-C8m42RSl.js";import"./useValueChanged-1Yp4y3oX.js";import"./CollapsiblePanel-BL5S39QC.js";import"./MultiColumnSortDialog--DVVYfY1.js";import"./MenuTrigger-DmbJp5Gs.js";import"./CompositeItem-OApa3E9B.js";import"./ToolbarRootContext-BzxLQKxD.js";import"./getDisabledMountTransitionStyles-Bfq6rT7W.js";import"./getPseudoElementBounds-BSxnPPYZ.js";import"./chevron-down-DUptqSW1.js";import"./index-D6Tuy83n.js";import"./error-DqgP0A5_.js";import"./BaseCbacBanner-CUGm4Hep.js";import"./makeExternalStore-B6rRcBgB.js";import"./Tooltip-BguagF7e.js";import"./PopoverPopup-owAcXcNj.js";import"./toNumber-C6mEAZk4.js";import"./tick-DewssbAl.js";import"./DropdownField-CHjza2Qs.js";import"./withOsdkMetrics-CqGHF823.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
