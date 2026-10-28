import{j as r}from"./iframe-BLF1KQu4.js";import{O as b}from"./object-table-CqtGn1QO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9pOIy-m.js";import{u as g}from"./useOsdkClient-GmjUNKMk.js";import"./preload-helper-GcktYcA3.js";import"./Table-BQK0Clb8.js";import"./index-aXPerbbD.js";import"./Dialog-D_it6VW5.js";import"./cross-D5Owe--z.js";import"./svgIconContainer-DjnJEiXc.js";import"./useBaseUiId-BxovN8d6.js";import"./InternalBackdrop-8YL1-Sw7.js";import"./composite-fyXwWWU2.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./index-CNufdcVg.js";import"./useEventCallback-CZHl-UH0.js";import"./SkeletonBar-CuJtrTbh.js";import"./LoadingCell-DQVtZ2uu.js";import"./ColumnConfigDialog-DGZd3AJ3.js";import"./DraggableList-D-ibz47z.js";import"./search-jxTo-jPn.js";import"./Input-ep0tMe9Y.js";import"./useControlled-BnRS1sX7.js";import"./Button-YyRiSJZP.js";import"./small-cross-D2kARGCF.js";import"./ActionButton-DJbMDa4y.js";import"./Checkbox-Cz2c9LTI.js";import"./useValueChanged-rkrZLPbB.js";import"./CollapsiblePanel-C1eEG4ny.js";import"./MultiColumnSortDialog-D38u1zNw.js";import"./MenuTrigger-B1erjAsz.js";import"./CompositeItem-jL-VyW-C.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./getDisabledMountTransitionStyles-DoQQxJRd.js";import"./getPseudoElementBounds-C6VfQ6WO.js";import"./chevron-down-CtuyY29H.js";import"./index-DoZkCOy9.js";import"./error-8EJJ_3qq.js";import"./BaseCbacBanner-DOrbPdl4.js";import"./makeExternalStore-G2m-9f72.js";import"./Tooltip-CgClAe-q.js";import"./PopoverPopup-148tTgSp.js";import"./debounce-D7Z_8Dqm.js";import"./tick-By4yjMKZ.js";import"./DropdownField-DWAvJ7rF.js";import"./isEqual-BlXyHZ5h.js";import"./withOsdkMetrics-JDZWgyN8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
