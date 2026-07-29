import{j as r}from"./iframe-Dtkqspnq.js";import{O as b}from"./object-table-DiHqFcSM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aGhI43zo.js";import{u as g}from"./useOsdkClient-Du0uLL2W.js";import"./preload-helper-CMjwTO2l.js";import"./Table-DI_lBPB0.js";import"./index-O6kMzL-B.js";import"./Dialog-BxJLX5gJ.js";import"./cross-RSYUfYNl.js";import"./svgIconContainer-7kIDCLLr.js";import"./useBaseUiId-BA2Wb1vw.js";import"./InternalBackdrop-BuFxK96J.js";import"./composite-C43fxzlr.js";import"./index-BK1pEJ_2.js";import"./index-DnTpAg1q.js";import"./index-CNSyaydD.js";import"./useEventCallback-CdXupzoB.js";import"./SkeletonBar-C9wlHxAM.js";import"./LoadingCell-CcqRQaB-.js";import"./ColumnConfigDialog-CzVJq6uj.js";import"./DraggableList-upkd7pkh.js";import"./search-BdsiJdsL.js";import"./Input-BQhqp0i4.js";import"./useControlled-DsSZ6QOu.js";import"./isEqual-flx9m8JW.js";import"./isObject-BWu7U3TW.js";import"./Button-GHfwW4ze.js";import"./ActionButton-BbMkmZ8Y.js";import"./Checkbox-CwYXbW0D.js";import"./useValueChanged-BA9uiMY5.js";import"./CollapsiblePanel-BCuoLOAT.js";import"./MultiColumnSortDialog-Rm7UzozG.js";import"./MenuTrigger-BKQQaiOA.js";import"./CompositeItem-C-3HiIeo.js";import"./ToolbarRootContext-BVt7FkS8.js";import"./getDisabledMountTransitionStyles-BeMvHOSS.js";import"./getPseudoElementBounds-BOhqKyIV.js";import"./chevron-down-Beub6QMI.js";import"./index-BzmK8_eD.js";import"./error-D0-EM7fN.js";import"./BaseCbacBanner-CpEldF-7.js";import"./makeExternalStore-CpwKRFYJ.js";import"./Tooltip-BrhYXS_I.js";import"./PopoverPopup-YNJds1hs.js";import"./toNumber-BWA8ft4y.js";import"./tick-BZpmxQ9o.js";import"./DropdownField-CFRjAz-l.js";import"./withOsdkMetrics-bTLqPtnq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
