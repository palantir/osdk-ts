import{j as r}from"./iframe-B6HE8r1l.js";import{O as b}from"./object-table-CQmthn2A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjS0QLDj.js";import{u as g}from"./useOsdkClient-Nacbi_ds.js";import"./preload-helper-EtA7hFCh.js";import"./Table-ZoCfFmSU.js";import"./index-BCMaRUjb.js";import"./Dialog-8hzMdC0R.js";import"./cross-BjZ44SU2.js";import"./svgIconContainer-BsDMjwS6.js";import"./useBaseUiId-BzcE0Rie.js";import"./InternalBackdrop-Cf6OlXBD.js";import"./composite-djF9vkGv.js";import"./index-CJscuqzO.js";import"./index-BkMjc3Zz.js";import"./index-TwSuOpr6.js";import"./useEventCallback-D56Fb_o4.js";import"./SkeletonBar-QShiBHjp.js";import"./LoadingCell--dD9SSBp.js";import"./ColumnConfigDialog-B2et3xG9.js";import"./DraggableList-QMdqQUb1.js";import"./search-CcV-m7jj.js";import"./Input-_s7MN3wC.js";import"./useControlled-D5sOiBif.js";import"./Button-ResaMq3t.js";import"./small-cross-C32KlYhe.js";import"./ActionButton-CWQiMZ6U.js";import"./Checkbox-BNADs0cE.js";import"./useValueChanged-BBXwiEUw.js";import"./CollapsiblePanel-BcHGrGjI.js";import"./MultiColumnSortDialog-BdajWTTd.js";import"./MenuTrigger-C5PNYoaH.js";import"./CompositeItem-DP3Bb3vo.js";import"./ToolbarRootContext-BVpWK1U-.js";import"./getDisabledMountTransitionStyles-BIBkvW7t.js";import"./getPseudoElementBounds-DERUGPbz.js";import"./chevron-down-DKIz5-M-.js";import"./index-CUfD7gtD.js";import"./error-BJZjh9bl.js";import"./BaseCbacBanner-Ba5fFkVb.js";import"./makeExternalStore-C0P5U_f9.js";import"./Tooltip-CJZAX-Va.js";import"./PopoverPopup-BVaD9-3k.js";import"./debounce-CG2SWdkE.js";import"./tick-B6YXw7V4.js";import"./DropdownField-BFB5iTsi.js";import"./isEqual-CvBjiV-s.js";import"./withOsdkMetrics-OQ6oomXn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
