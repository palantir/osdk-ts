import{j as r}from"./iframe-BDNIqcwM.js";import{O as b}from"./object-table-BRZikq7I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Zqd4KKks.js";import{u as g}from"./useOsdkClient-bCCWw78J.js";import"./preload-helper-AKgPBeH6.js";import"./Table-CU6QB62K.js";import"./index-CxoqJ8Ca.js";import"./Dialog-Cu7AZGLK.js";import"./cross-DSoUlEls.js";import"./svgIconContainer-YSUGMhqY.js";import"./useBaseUiId-D6uxKhCZ.js";import"./InternalBackdrop-DHNCq7so.js";import"./composite-CjQ-M14e.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./index-6Oer6Qui.js";import"./useEventCallback-C8nnE3Sq.js";import"./SkeletonBar-4B0Vdclq.js";import"./LoadingCell-BsOPEaH3.js";import"./ColumnConfigDialog-BfdZhTeV.js";import"./DraggableList-Bk2ik8FH.js";import"./search-B7vNZRvA.js";import"./Input-CGsPuuzg.js";import"./useControlled-jo7j2Y8W.js";import"./Button-DAHfEEi6.js";import"./small-cross-ZYK0SGzG.js";import"./ActionButton-hlvEU7PC.js";import"./Checkbox-Dn3WdtnT.js";import"./useValueChanged-C0sUDO03.js";import"./CollapsiblePanel-CmEgATYW.js";import"./MultiColumnSortDialog-kqTHFaI3.js";import"./MenuTrigger-7B5Xr4MV.js";import"./CompositeItem-9re6AgtS.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./getDisabledMountTransitionStyles-DFR4pKCD.js";import"./getPseudoElementBounds-BLuItyL9.js";import"./chevron-down-B8PeAqOW.js";import"./index-DKSVa_Lx.js";import"./error-CizQVsJR.js";import"./BaseCbacBanner-C0CCbaP8.js";import"./makeExternalStore-qbxX8lsc.js";import"./Tooltip-CXp93mpB.js";import"./PopoverPopup-C_vvYsh3.js";import"./debounce-C30szGMw.js";import"./tick-C99eCLyr.js";import"./DropdownField-BiIjaXyg.js";import"./isEqual-DuCh0bkd.js";import"./withOsdkMetrics-DbOReG2B.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
