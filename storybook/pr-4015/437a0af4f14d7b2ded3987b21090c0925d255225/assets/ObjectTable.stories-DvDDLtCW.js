import{j as i}from"./iframe-I5kvh-Kw.js";import{O as p}from"./object-table-Cr0S9q82.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-JR9uvnE1.js";import"./preload-helper-Bdf318pV.js";import"./Table-TtSnZhQr.js";import"./index-HKnhZxyX.js";import"./Dialog-mqgafTiX.js";import"./cross-Yl6g30y6.js";import"./svgIconContainer-DDPN3ss8.js";import"./useBaseUiId-BejWRuZ2.js";import"./InternalBackdrop-AewAO-J_.js";import"./composite-DzvS9mVY.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./index-Dc5Qye8S.js";import"./useEventCallback-pdwLNnur.js";import"./SkeletonBar-kcsCYLu4.js";import"./LoadingCell-DtTIvVBW.js";import"./ColumnConfigDialog-BCP5cr4v.js";import"./DraggableList-CcLt-lZ7.js";import"./search-C9rUiq_s.js";import"./Input-GvrpBokI.js";import"./useControlled-B-k81KQz.js";import"./Button-B2DkfEqk.js";import"./small-cross-Bt34L26C.js";import"./ActionButton-CqQaVHKu.js";import"./Checkbox-BciDkEMh.js";import"./useValueChanged-B0q3nMZ1.js";import"./CollapsiblePanel-e6KM6j36.js";import"./MultiColumnSortDialog-geU7VG77.js";import"./MenuTrigger--lameju1.js";import"./CompositeItem-Ck73puur.js";import"./ToolbarRootContext-BpC1haoE.js";import"./getDisabledMountTransitionStyles-BX75q4sb.js";import"./getPseudoElementBounds-Bc29vczI.js";import"./chevron-down-BWVLfJxG.js";import"./index-BYHjFf0T.js";import"./error-Dywin3-5.js";import"./BaseCbacBanner-MQh6F2xl.js";import"./makeExternalStore-CUhQIJ-n.js";import"./Tooltip-DU2yzwco.js";import"./PopoverPopup-C0f2Xvwy.js";import"./debounce-DwNlwyza.js";import"./useOsdkClient-CHvk60Or.js";import"./tick-CMqxctjO.js";import"./DropdownField-ceLSuDDZ.js";import"./isEqual-CvGgOlJg.js";import"./withOsdkMetrics-CldLsQ2u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
