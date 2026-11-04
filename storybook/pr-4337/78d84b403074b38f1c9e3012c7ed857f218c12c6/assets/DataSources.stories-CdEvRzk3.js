import{j as r}from"./iframe-kWD-jdIM.js";import{O as b}from"./object-table-RGNDvId0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D248eg-o.js";import{u as g}from"./useOsdkClient-DgtXvuGE.js";import"./preload-helper-BYIpTBn0.js";import"./Table-BiUBNS3W.js";import"./index-DHpWRKQv.js";import"./Dialog-DxgQ0zFS.js";import"./cross-BSGzHacU.js";import"./svgIconContainer-B8XSgAJk.js";import"./useBaseUiId-C60jF_o-.js";import"./InternalBackdrop-DyR0_bnS.js";import"./composite-BmOV-aCZ.js";import"./index-DMVcTELQ.js";import"./index-D6dW0J7N.js";import"./index-GH3PvjFS.js";import"./useEventCallback-DlpvfO9F.js";import"./SkeletonBar-COIOzOry.js";import"./LoadingCell-AJKkJPU_.js";import"./ColumnConfigDialog-BHErHlOV.js";import"./DraggableList-SCDQOoOU.js";import"./search-Xv8sEjS-.js";import"./Input-DOuHVujQ.js";import"./useControlled-u0KjilF0.js";import"./Button-B37N9Ve_.js";import"./small-cross-B64fsBIe.js";import"./ActionButton-Ci0HXhBZ.js";import"./Checkbox-DVS3v9FZ.js";import"./useValueChanged-BFrDnBzs.js";import"./CollapsiblePanel-evQDlZSo.js";import"./MultiColumnSortDialog-BY4l5wpI.js";import"./MenuTrigger-rcHYECwR.js";import"./CompositeItem-BYdOgjmY.js";import"./ToolbarRootContext-QHke1z2n.js";import"./getDisabledMountTransitionStyles-Cfp--kIY.js";import"./getPseudoElementBounds-ARNy8nkD.js";import"./chevron-down-B5rYpa0g.js";import"./index-B2Y0AFjL.js";import"./error-DarRpeI1.js";import"./BaseCbacBanner-CAxX5Ilo.js";import"./makeExternalStore-V_raLWeu.js";import"./Tooltip-JdfuuPqa.js";import"./PopoverPopup-BL8XjTGc.js";import"./debounce-BUu0DgJ5.js";import"./tick-Bkqq1dN2.js";import"./DropdownField-B2rD9Nef.js";import"./isEqual-Dama8GfR.js";import"./withOsdkMetrics-CKT8uRvg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
