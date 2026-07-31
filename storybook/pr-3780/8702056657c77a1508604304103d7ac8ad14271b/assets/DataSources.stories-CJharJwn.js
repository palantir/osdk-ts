import{j as r}from"./iframe-DqIzSpCg.js";import{O as b}from"./object-table-Do_2Ejyo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dei15H71.js";import{u as g}from"./useOsdkClient-Mj2L1f2j.js";import"./preload-helper-R5GmqVN8.js";import"./Table-D6CCjywu.js";import"./index-BrnybYQf.js";import"./Dialog-DDIOlKE9.js";import"./cross-Dc0LE15P.js";import"./svgIconContainer-Ob4Yg7Br.js";import"./useBaseUiId-Cqtekamh.js";import"./InternalBackdrop-DF9hbMsT.js";import"./composite-Df5qJXaR.js";import"./index-CH70aXwo.js";import"./index-DGMFLn0J.js";import"./index-CCNyIM8K.js";import"./useEventCallback-DYWUko3K.js";import"./SkeletonBar-CyTTvGgo.js";import"./LoadingCell-C9XMvKrd.js";import"./ColumnConfigDialog-DCxhbfI-.js";import"./DraggableList-Bcc5zRpi.js";import"./search-DOaKOXdE.js";import"./Input-C954CXtm.js";import"./useControlled-C3eA8reA.js";import"./isEqual-DVg8JjXK.js";import"./isObject-CBRil1Wa.js";import"./Button-BKX_91Hc.js";import"./ActionButton-CCx9U4EV.js";import"./Checkbox-Dbh2lHby.js";import"./useValueChanged-7uyeyXMu.js";import"./CollapsiblePanel-Dg4ZPYnE.js";import"./MultiColumnSortDialog-1DAoLiFO.js";import"./MenuTrigger-BeMiuhCy.js";import"./CompositeItem-DnElVRNo.js";import"./ToolbarRootContext-yHYhRp3F.js";import"./getDisabledMountTransitionStyles-DjlKcSP0.js";import"./getPseudoElementBounds-BBHU_0Vc.js";import"./chevron-down-CAfWuvJU.js";import"./index-DXjCR0SH.js";import"./error-DqiHWIhs.js";import"./BaseCbacBanner-DUUuC9t3.js";import"./makeExternalStore-C1J_4LFW.js";import"./Tooltip-OEq8UMF_.js";import"./PopoverPopup-XqcHPyvv.js";import"./toNumber-BDgQ8gPM.js";import"./tick-BbdGReRZ.js";import"./DropdownField-DCl53iKj.js";import"./withOsdkMetrics-toCmYVYF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
