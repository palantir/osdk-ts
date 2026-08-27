import{j as r}from"./iframe-BdjRDCo-.js";import{O as b}from"./object-table-Dtcz12IT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DKvg3Gmv.js";import{u as g}from"./useOsdkClient-G0DtmmXL.js";import"./preload-helper-BsLdtZok.js";import"./Table-Cx3axRXr.js";import"./index-47c2OpeK.js";import"./Dialog-DbIFtalD.js";import"./cross-B5GzLpqa.js";import"./svgIconContainer-CQO2iyCb.js";import"./useBaseUiId-D_XUMLa4.js";import"./InternalBackdrop-Wo6tyC9E.js";import"./composite-CKlKqtP8.js";import"./index-DauSPNF0.js";import"./index-C3FIy_al.js";import"./index-Dt84Iv_5.js";import"./useEventCallback-BMnGO4Fm.js";import"./SkeletonBar-B7Prl9lh.js";import"./LoadingCell-DacR6Cx9.js";import"./ColumnConfigDialog-Bup3DQUt.js";import"./DraggableList-akxDFxxW.js";import"./search-C7zMm79O.js";import"./Input-CxfR2yqt.js";import"./useControlled-B8Jz7rQz.js";import"./Button-BL8FosPK.js";import"./small-cross-Hk9lslT7.js";import"./ActionButton-BOzqWsgN.js";import"./Checkbox-DHdCg2eB.js";import"./useValueChanged-BxuwKHYK.js";import"./CollapsiblePanel-DsNgy45u.js";import"./MultiColumnSortDialog-CRXODrkC.js";import"./MenuTrigger-CegzCc63.js";import"./CompositeItem-C9-QWuFp.js";import"./ToolbarRootContext-B-UKwdIZ.js";import"./getDisabledMountTransitionStyles-DqVTgWbQ.js";import"./getPseudoElementBounds-D7e_8qLy.js";import"./chevron-down-CZ95xNZC.js";import"./index-DczRP-BI.js";import"./error-B9XMEbgf.js";import"./BaseCbacBanner-BVWMsn2z.js";import"./makeExternalStore-BzujWOSe.js";import"./Tooltip-BA98EOIH.js";import"./PopoverPopup-BQ8qOJ-A.js";import"./debounce-CDYkNytK.js";import"./tick-hmoZ_aS5.js";import"./DropdownField-J2qWCChs.js";import"./isEqual-BCmlNN5k.js";import"./withOsdkMetrics-Cd9aI-bB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
