import{j as r}from"./iframe-D-NjJf8E.js";import{O as b}from"./object-table-CQvqHuFL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ffTX7ouP.js";import{u as g}from"./useOsdkClient-UvBflAyV.js";import"./preload-helper-CTOkYOfH.js";import"./Table-BKmBWaKK.js";import"./index-BfNG9SBg.js";import"./Dialog-BNUju2pG.js";import"./cross-CeDP8iYL.js";import"./svgIconContainer-CGGP5dln.js";import"./useBaseUiId-fJObIM_9.js";import"./InternalBackdrop-Dr_1KZ7A.js";import"./composite-CYVlE3X-.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./index-CQZ7ITuQ.js";import"./useEventCallback-SSXm1pp5.js";import"./SkeletonBar-Bx9ZEMx9.js";import"./LoadingCell-DsONRhQM.js";import"./ColumnConfigDialog-Di4_rnJ1.js";import"./DraggableList-CeyqnhqE.js";import"./search-CjsZbzMa.js";import"./Input-Djaz_ktk.js";import"./useControlled-D1sspD4r.js";import"./Button-B1_GO9AJ.js";import"./small-cross-Bxoh9LLX.js";import"./ActionButton-Ci63hB-4.js";import"./Checkbox-Blg81idJ.js";import"./useValueChanged-BPlDHc58.js";import"./CollapsiblePanel-B43m-kWy.js";import"./MultiColumnSortDialog-CUHPZh-T.js";import"./MenuTrigger-DMumYPhU.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./getDisabledMountTransitionStyles-9dZlZGXn.js";import"./getPseudoElementBounds-CjUxBsGr.js";import"./chevron-down-C-c1FjW5.js";import"./index-BgxA68V1.js";import"./error-BoBBM1re.js";import"./BaseCbacBanner-D8FF-_Kg.js";import"./makeExternalStore-BW52Pv17.js";import"./Tooltip-DvnHQmBq.js";import"./isObject-u4AYGR4g.js";import"./debounce-6S1krlRt.js";import"./tick-C4vdjWJ1.js";import"./DropdownField-B0llccFH.js";import"./isEqual-DdLufpyz.js";import"./_baseIsEqual-CZ4xsHuR.js";import"./withOsdkMetrics-BLPi8trO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
