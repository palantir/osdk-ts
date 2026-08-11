import{j as r}from"./iframe-B3d6ZwH7.js";import{O as b}from"./object-table-DHY1G7-K.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CevLlc3f.js";import{u as g}from"./useOsdkClient-DF-jB69e.js";import"./preload-helper-BSBI65hL.js";import"./Table-EMbp9qdH.js";import"./index-Bij8j6CR.js";import"./Dialog-CMth_41-.js";import"./cross-BWneTCDr.js";import"./svgIconContainer-NJcm7Mm7.js";import"./useBaseUiId-C-tRhBps.js";import"./InternalBackdrop-MtcmWp1u.js";import"./composite-CtQhbIeo.js";import"./index-DtG__1M4.js";import"./index-Cq5tqX8Z.js";import"./index-BaAo3EAk.js";import"./useEventCallback-DHJr8SHC.js";import"./SkeletonBar-D-rn6Dfi.js";import"./LoadingCell-CW5g-UDB.js";import"./ColumnConfigDialog-BFQj8l3k.js";import"./DraggableList-DruqWd_M.js";import"./search-CAgN4ZC5.js";import"./Input-CsaNiGJD.js";import"./useControlled-D1Bg559p.js";import"./isEqual-BqptH2-7.js";import"./isObject-DLydvX67.js";import"./Button-B3hR3y0_.js";import"./ActionButton-Hr2tOkzN.js";import"./Checkbox-FgktjBXT.js";import"./useValueChanged-CVjEmZG9.js";import"./CollapsiblePanel-anJ0WyFl.js";import"./MultiColumnSortDialog-BTt4c4kR.js";import"./MenuTrigger-CMa-1yOV.js";import"./CompositeItem-DK8C0Auv.js";import"./ToolbarRootContext-DBcC0PM-.js";import"./getDisabledMountTransitionStyles-69HVwoW5.js";import"./getPseudoElementBounds-UhFrpM66.js";import"./chevron-down-B6cvH9xf.js";import"./index-C0kc6WcW.js";import"./error-C54s5z2j.js";import"./BaseCbacBanner-DuflPtV7.js";import"./makeExternalStore-BZfNFRrb.js";import"./Tooltip-YNGtfezR.js";import"./PopoverPopup-b_nrQR6B.js";import"./toNumber-DDtkQcvh.js";import"./tick-uNBS6qe_.js";import"./DropdownField-Bll0nSYs.js";import"./withOsdkMetrics-__TOn-89.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
