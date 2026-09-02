import{j as r}from"./iframe-CTewSG_j.js";import{O as b}from"./object-table-Bk-ld9Ev.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRMxbwZn.js";import{u as g}from"./useOsdkClient-BDqAgVp9.js";import"./preload-helper-C25ouRIs.js";import"./Table-kZrN-YU-.js";import"./index-BUWAeCIL.js";import"./Dialog-Dx2dqM-X.js";import"./cross-Dyevi5zm.js";import"./svgIconContainer-3JRMjvgA.js";import"./useBaseUiId-0-lRFcas.js";import"./InternalBackdrop-BViQPF1v.js";import"./composite-DC6Og9Tc.js";import"./index-BY0WDCEk.js";import"./index-Cz8uhmbU.js";import"./index-Bzdvr9St.js";import"./useEventCallback-Cv2Bx2Cg.js";import"./SkeletonBar-CMv4XQzP.js";import"./LoadingCell-CvogEU6t.js";import"./ColumnConfigDialog-CVkdhNeK.js";import"./DraggableList-D7xKaDwV.js";import"./search-CKuhorfg.js";import"./Input-Dy8oaUwS.js";import"./useControlled-C5WpgBSN.js";import"./Button-X3VWCY6_.js";import"./small-cross-Pk1qW6Px.js";import"./ActionButton-CpWXz7eG.js";import"./Checkbox-CY-cO03f.js";import"./useValueChanged-BSeCBV9n.js";import"./CollapsiblePanel-8yX91TFu.js";import"./MultiColumnSortDialog-BoTfusds.js";import"./MenuTrigger-DEv0baap.js";import"./CompositeItem-DkrjMxub.js";import"./ToolbarRootContext-CQyb8mSw.js";import"./getDisabledMountTransitionStyles-6DUqLUoF.js";import"./getPseudoElementBounds-CQV9Z7M2.js";import"./chevron-down-sFLW1j78.js";import"./index-DTMs9aOM.js";import"./error-BYYqLL3q.js";import"./BaseCbacBanner-CsSKeUFV.js";import"./makeExternalStore-C3Kcqa4P.js";import"./Tooltip-DSHwSf4n.js";import"./PopoverPopup-BLDgKRkB.js";import"./debounce-BgRFB7Ru.js";import"./tick-BfD28YZl.js";import"./DropdownField-BeW8_px6.js";import"./isEqual-DB4cWGR5.js";import"./withOsdkMetrics-DdgMiKO_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
