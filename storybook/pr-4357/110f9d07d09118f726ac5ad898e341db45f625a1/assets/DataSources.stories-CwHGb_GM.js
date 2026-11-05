import{j as r}from"./iframe-BAjgPtEd.js";import{O as b}from"./object-table-BGE3lmLd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9_aA8Tu.js";import{u as g}from"./useOsdkClient-BCGm5mz_.js";import"./preload-helper-CvSpShLn.js";import"./Table-uO2bG5NP.js";import"./index-DkQET497.js";import"./Dialog-CzVvxDJ1.js";import"./cross-Zmf20Klh.js";import"./svgIconContainer-RrdsKFgG.js";import"./useBaseUiId-QgJXrsod.js";import"./InternalBackdrop-DVevY0e1.js";import"./composite-17xRguTl.js";import"./index-2jadBPxc.js";import"./index-DNkRyEMq.js";import"./index-CpXxZpck.js";import"./useEventCallback-TLq2luMM.js";import"./SkeletonBar-Cjk3uSES.js";import"./LoadingCell-D1aWb7Nd.js";import"./ColumnConfigDialog-Bjak5h1P.js";import"./DraggableList-DVFdr1ln.js";import"./search-moMGOLYA.js";import"./Input-BkIr6Cv-.js";import"./useControlled-DSQPO38y.js";import"./Button-7st_Ze6e.js";import"./small-cross-jzbeAole.js";import"./ActionButton-lEBAIWe4.js";import"./Checkbox-DwmUbSNt.js";import"./useValueChanged-iTC_WZuQ.js";import"./CollapsiblePanel-CrYZSgVe.js";import"./MultiColumnSortDialog-BujVVTIE.js";import"./MenuTrigger-Di0nR9__.js";import"./CompositeItem-9sostI2N.js";import"./ToolbarRootContext-DYBHmzGt.js";import"./getDisabledMountTransitionStyles-BxkbLjPv.js";import"./getPseudoElementBounds-knK5p6iP.js";import"./chevron-down-C_c1RpTk.js";import"./index-BC-EQLUC.js";import"./error-BPyKBfp3.js";import"./BaseCbacBanner-5kzGYKN7.js";import"./makeExternalStore-ucFYf-xR.js";import"./Tooltip-D6v0Q2e4.js";import"./isObject-BIkKAW4r.js";import"./debounce-DYx6ReB0.js";import"./tick-BykmFIBb.js";import"./DropdownField-Dd_PGUOx.js";import"./isEqual-DvSExQkd.js";import"./_baseIsEqual-CBo-f9pi.js";import"./withOsdkMetrics-CitYO8jf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
