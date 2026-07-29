import{j as i}from"./iframe-BvlK2p8r.js";import{O as p}from"./object-table-B8BhsAwI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CeWQT8CZ.js";import"./preload-helper-Bf1QTDA3.js";import"./Table-VrlY8bUZ.js";import"./index-CJtyvgYT.js";import"./Dialog--FJPiMUE.js";import"./cross-XBkVoEMi.js";import"./svgIconContainer-CLWMH6Fx.js";import"./useBaseUiId-DiGEHRWv.js";import"./InternalBackdrop-Cvxe13O2.js";import"./composite-DLYbiM9i.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./index-BXKLk0LB.js";import"./useEventCallback-YMzXT1lg.js";import"./SkeletonBar-CGq0TYtq.js";import"./LoadingCell-BOX2GpiG.js";import"./ColumnConfigDialog-CmefXAym.js";import"./DraggableList-C40V0O03.js";import"./search-CWi8yKUA.js";import"./Input-5I-CO4CQ.js";import"./useControlled-B_OuFYE6.js";import"./isEqual-D0ITe3HQ.js";import"./small-cross-C2NIy0Lo.js";import"./Button-CwuonV3H.js";import"./ActionButton-6FVwa-nx.js";import"./Checkbox-Dwe_ZHAJ.js";import"./useValueChanged-DColRsxd.js";import"./CollapsiblePanel-B2S2rCZq.js";import"./MultiColumnSortDialog-CxV4v8xh.js";import"./MenuTrigger-C44b3RoE.js";import"./CompositeItem-DBLtjtTq.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./getDisabledMountTransitionStyles-DDUBMXqp.js";import"./getPseudoElementBounds-BoJCJ9ri.js";import"./chevron-down-Bpyob3k8.js";import"./index-C-Bgj_rI.js";import"./error-CHnt8F1v.js";import"./BaseCbacBanner-Cnz8SeR-.js";import"./makeExternalStore-uNOWdKm-.js";import"./Tooltip-Dl9Maat9.js";import"./PopoverPopup-DzIb0oW3.js";import"./Combobox-B-MC9o5q.js";import"./useOsdkClient-CJwHvTQr.js";import"./tick-DDScHrxu.js";import"./DropdownField-CjecytYH.js";import"./withOsdkMetrics-BEFCVJp2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
