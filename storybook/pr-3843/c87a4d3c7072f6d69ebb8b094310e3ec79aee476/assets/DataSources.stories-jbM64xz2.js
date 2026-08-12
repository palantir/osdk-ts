import{j as r}from"./iframe-D1W6ppAK.js";import{O as b}from"./object-table-BXfRCJp3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gNPdhtm8.js";import{u as g}from"./useOsdkClient-hHLZyAhP.js";import"./preload-helper-BVLKfSQB.js";import"./Table-BA3k2QOE.js";import"./index-8ZY-fAEu.js";import"./Dialog-DdAy48XA.js";import"./cross-D_CxARA8.js";import"./svgIconContainer-DN-_s1rP.js";import"./useBaseUiId-CH82QQ2E.js";import"./InternalBackdrop-WZE3TanW.js";import"./composite-CpX9wK4w.js";import"./index-DDvK6xdc.js";import"./index-DUSFKfe-.js";import"./index-B72OI3Hp.js";import"./useEventCallback-BQDPyLuX.js";import"./SkeletonBar-C3_CvgP8.js";import"./LoadingCell-BVOptDHB.js";import"./ColumnConfigDialog-CpmEDpkh.js";import"./DraggableList-fLpFj9vo.js";import"./search-DG4ye0Iy.js";import"./Input-D9RKMHTW.js";import"./useControlled-BcGmUGgO.js";import"./isEqual-BacWMdXw.js";import"./isObject-CtnbCK_o.js";import"./Button-2-x2Eoj_.js";import"./ActionButton-BxfRFNfM.js";import"./Checkbox-BMadytLF.js";import"./useValueChanged-DF-zEjDf.js";import"./CollapsiblePanel-CHtrc9CX.js";import"./MultiColumnSortDialog-DAPTAM5w.js";import"./MenuTrigger-D-YqKWyr.js";import"./CompositeItem-B4Xj9JQ_.js";import"./ToolbarRootContext-GzlqhBPh.js";import"./getDisabledMountTransitionStyles-BRM969Fi.js";import"./getPseudoElementBounds-CrJcXgCc.js";import"./chevron-down-4suDLJVI.js";import"./index-BdK8S6bs.js";import"./error-C_dk0FTg.js";import"./BaseCbacBanner-BUpDuKyr.js";import"./makeExternalStore-DtSycEX-.js";import"./Tooltip-DryUTGTd.js";import"./PopoverPopup-BGuegJtv.js";import"./toNumber-DnOl7u43.js";import"./tick-f4TkQNhU.js";import"./DropdownField-CvFuIYZZ.js";import"./withOsdkMetrics-DBsUcf0H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
