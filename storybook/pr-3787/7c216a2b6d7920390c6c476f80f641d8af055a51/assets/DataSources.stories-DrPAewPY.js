import{j as r}from"./iframe-DBzqrt56.js";import{O as b}from"./object-table-BJAjEQnJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DheEhBi0.js";import{u as g}from"./useOsdkClient-07aQwNTa.js";import"./preload-helper-BYRdJxme.js";import"./Table-DdCg30xp.js";import"./index-CGTJucPn.js";import"./Dialog-CQLSDy00.js";import"./cross-Bba8yQHb.js";import"./svgIconContainer-BQ8ude0X.js";import"./useBaseUiId-dLakDqSs.js";import"./InternalBackdrop-DZDDKVf0.js";import"./composite-B6PaBa-a.js";import"./index-CZmKTtfj.js";import"./index-B9IR710C.js";import"./index-CLCfciEQ.js";import"./useEventCallback-kfKpJfFv.js";import"./SkeletonBar-BIr2SSBQ.js";import"./LoadingCell-BYP6w5MW.js";import"./ColumnConfigDialog-Du1mc6KP.js";import"./DraggableList-B8w2fATq.js";import"./search-B2tTqhzE.js";import"./Input-giB4RCDX.js";import"./useControlled-BPRbm5-q.js";import"./isEqual-B8geApbv.js";import"./isObject-DkG1sVMZ.js";import"./Button-j0UCjDkN.js";import"./ActionButton-Xkbg_ODc.js";import"./Checkbox-Dh0wNNyr.js";import"./useValueChanged-D9QIFmpB.js";import"./CollapsiblePanel-ciJZfod4.js";import"./MultiColumnSortDialog-BZQNUgbw.js";import"./MenuTrigger-BTARNaQ8.js";import"./CompositeItem-jEqhJqZm.js";import"./ToolbarRootContext-BOGYc2wJ.js";import"./getDisabledMountTransitionStyles-BRTFh2Nu.js";import"./getPseudoElementBounds-DVx9Tcx1.js";import"./chevron-down-DuPl72ud.js";import"./index-k77pMsqi.js";import"./error-BgfO_Kt-.js";import"./BaseCbacBanner-C7o_u6S3.js";import"./makeExternalStore-LjuA8zll.js";import"./Tooltip-CGIc4ORz.js";import"./PopoverPopup-fztzUF8H.js";import"./toNumber-saNM3qnm.js";import"./tick-CxeZHEv3.js";import"./DropdownField-CQaYn6cM.js";import"./withOsdkMetrics-lVYMKJO7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
