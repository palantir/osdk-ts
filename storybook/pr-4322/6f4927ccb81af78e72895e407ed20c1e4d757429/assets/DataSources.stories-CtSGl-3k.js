import{j as r}from"./iframe-BvgKvBTT.js";import{O as b}from"./object-table-C04Tld44.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sRq53sDQ.js";import{u as g}from"./useOsdkClient-B-GUKLiD.js";import"./preload-helper-dVfNiIKn.js";import"./Table-BGGRw821.js";import"./index-C6P12W9x.js";import"./Dialog-BS5nOE0N.js";import"./cross-Dgfh0hI8.js";import"./svgIconContainer-BZvKBCv0.js";import"./useRenderElement-BFIknrE2.js";import"./InternalBackdrop-m0dkTmEO.js";import"./composite-DfJtFIGD.js";import"./useBaseUiId-DWfZ2Kad.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./index-CbHQFypX.js";import"./useEventCallback-DNmABAT6.js";import"./SkeletonBar-CFhg6IWc.js";import"./LoadingCell-CkyPVhhc.js";import"./ColumnConfigDialog-D-sng6Hl.js";import"./DraggableList-if29BgfX.js";import"./search-B95gAtiZ.js";import"./Input-B8f6lg4l.js";import"./useControlled-B2MP0s-G.js";import"./Button-CZUmTkhK.js";import"./small-cross-Clug_Kd9.js";import"./ActionButton-Db7nx97v.js";import"./Checkbox-hWqlZ6BH.js";import"./useValueChanged-BPblXw96.js";import"./CollapsiblePanel-DMDnXz2U.js";import"./MultiColumnSortDialog-CU8CNUw8.js";import"./MenuTrigger-DiZ3O7sE.js";import"./CompositeItem-xDL0fAk1.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./getDisabledMountTransitionStyles-DXQCvg3E.js";import"./getPseudoElementBounds-Cjaf3AfS.js";import"./chevron-down-Df3bql-T.js";import"./index-Da4z4C_A.js";import"./error-B-n6_xad.js";import"./BaseCbacBanner-D1FH96H4.js";import"./makeExternalStore-DebjiHh_.js";import"./Tooltip-CjqFaYRm.js";import"./PopoverPopup-P8XecnKG.js";import"./debounce-Kd32bTE8.js";import"./tick-UIVz0HQr.js";import"./DropdownField-DGHHzxif.js";import"./isEqual-m-6wbeTE.js";import"./withOsdkMetrics-D0FOqMKK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
