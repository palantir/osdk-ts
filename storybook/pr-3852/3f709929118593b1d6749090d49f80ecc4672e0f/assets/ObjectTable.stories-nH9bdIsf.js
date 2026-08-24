import{j as i}from"./iframe-BHEMD7tl.js";import{O as p}from"./object-table-9JUtvRcU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9Fiy4S5.js";import"./preload-helper-D9vvsdXl.js";import"./Table-CgHBZ9-U.js";import"./index-DZ514iDh.js";import"./Dialog-B407VpGc.js";import"./cross-CnuckHrQ.js";import"./svgIconContainer-czks9Ze_.js";import"./useBaseUiId-Bjqi_A68.js";import"./InternalBackdrop-BOOTBUHJ.js";import"./composite-CMjg4bD9.js";import"./index-CHTCcjpb.js";import"./index-BOLGOaBy.js";import"./index-COKjoxNM.js";import"./useEventCallback-C8xM2aMu.js";import"./SkeletonBar-CaP9thrl.js";import"./LoadingCell-Bi5n_cGp.js";import"./ColumnConfigDialog-4N1t5nOQ.js";import"./DraggableList-B_ZoJH4b.js";import"./search-BnYzLcC3.js";import"./Input-C6SEChBH.js";import"./useControlled-AgsGiueD.js";import"./Button-B8tVf1VG.js";import"./small-cross-CSiRE0ih.js";import"./ActionButton-D5jnFT3t.js";import"./Checkbox-Kf2cnlWj.js";import"./useValueChanged-B3jGbwyp.js";import"./CollapsiblePanel-D9e8UMK0.js";import"./MultiColumnSortDialog-DCIEhd8n.js";import"./MenuTrigger-BTN0l8ID.js";import"./CompositeItem-D521EeHU.js";import"./ToolbarRootContext-DbG-Pccc.js";import"./getDisabledMountTransitionStyles-BTxtuE3h.js";import"./getPseudoElementBounds-B18hrTO2.js";import"./chevron-down-fhI62sWj.js";import"./index-DUmTXUBR.js";import"./error-7ZQ1PwUq.js";import"./BaseCbacBanner-C_gcv04e.js";import"./makeExternalStore-Bvzg9kOq.js";import"./Tooltip-PgaxHJZr.js";import"./PopoverPopup-BSMX4lRh.js";import"./debounce-Bwjf3tf_.js";import"./useOsdkClient-Bww5s5cX.js";import"./tick-DMMXPGVM.js";import"./DropdownField-CHsTBEnv.js";import"./isEqual-miRlTJwc.js";import"./withOsdkMetrics-DXQf1Gwd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
