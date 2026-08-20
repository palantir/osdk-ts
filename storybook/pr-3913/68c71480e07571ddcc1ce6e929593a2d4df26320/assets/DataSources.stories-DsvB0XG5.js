import{j as r}from"./iframe-EjCpIKMB.js";import{O as b}from"./object-table-5fWdPkX7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_7t5LPM.js";import{u as g}from"./useOsdkClient-BzX-SVEP.js";import"./preload-helper-CIUDHQF8.js";import"./Table-Cmb2wjQa.js";import"./index-B5U3ePJq.js";import"./Dialog-DssNMNSz.js";import"./cross-CnLBVn_q.js";import"./svgIconContainer-CP-Ry2TB.js";import"./useBaseUiId-CK7LAaP5.js";import"./InternalBackdrop-CLd2i4Az.js";import"./composite-BNMQjeVI.js";import"./index-BtHapzj-.js";import"./index-BoU3FokU.js";import"./index-CEQCP6Rz.js";import"./useEventCallback-CiuEYM0E.js";import"./SkeletonBar-xLEjW6F1.js";import"./LoadingCell-CmPbThS_.js";import"./ColumnConfigDialog-DkxNN9Yc.js";import"./DraggableList-B18NmC-W.js";import"./search-BuWn_4CG.js";import"./Input-B6qHKpOm.js";import"./useControlled-C1-AcGB5.js";import"./Button-i8gsI8dS.js";import"./small-cross-BO3dC5CT.js";import"./ActionButton-D9fM6-Ow.js";import"./Checkbox-rkPeMWtn.js";import"./useValueChanged-BrI5qHq7.js";import"./CollapsiblePanel-CT_Zqu4L.js";import"./MultiColumnSortDialog-CLWNn6M_.js";import"./MenuTrigger-7vF3udgH.js";import"./CompositeItem-DMMDITMV.js";import"./ToolbarRootContext-D7y3n011.js";import"./getDisabledMountTransitionStyles-DU_IFslq.js";import"./getPseudoElementBounds-CftZdi9Z.js";import"./chevron-down-BryEDF54.js";import"./index-C86moaIy.js";import"./error-COq5rtPP.js";import"./BaseCbacBanner-CTsIoRnR.js";import"./makeExternalStore-C3iPT6jS.js";import"./Tooltip-DvfNwL5O.js";import"./PopoverPopup-Bln9dMkk.js";import"./debounce-iiPmlamn.js";import"./tick-BsXgJ5Ai.js";import"./DropdownField-G8plP5wa.js";import"./isEqual-Dlpp4WAb.js";import"./withOsdkMetrics-BFKxMYaV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
