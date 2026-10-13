import{j as i}from"./iframe-Dig_Ahq7.js";import{O as p}from"./object-table-DRbn2KV9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnwHD7Ug.js";import"./preload-helper-Eyc3oojg.js";import"./Table-BH6VCbZL.js";import"./index-BAoTCyK2.js";import"./Dialog-DjeLPKul.js";import"./cross-BbZdDJWd.js";import"./svgIconContainer-Cx17DJom.js";import"./useBaseUiId-BXYV1Ucu.js";import"./InternalBackdrop-9xDhMp1X.js";import"./composite-GVV5HeYl.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./index-C7_bCvO2.js";import"./useEventCallback-gJbpMQg7.js";import"./SkeletonBar-CsGbtXT3.js";import"./LoadingCell-DKZrjk97.js";import"./ColumnConfigDialog-BuTtQE3J.js";import"./DraggableList-tJf8F9Sb.js";import"./search-C4f4g9Ue.js";import"./Input-DERIfaLU.js";import"./useControlled-9l0-iUGA.js";import"./Button-Cg2kaI0u.js";import"./small-cross-DjUMZG4-.js";import"./ActionButton-CjCg9wAs.js";import"./Checkbox-J-o0L9Wo.js";import"./useValueChanged-vdnoKm5P.js";import"./CollapsiblePanel-KQrHcfGa.js";import"./MultiColumnSortDialog-Btfbxxyl.js";import"./MenuTrigger-94IZ7g5X.js";import"./CompositeItem-CjjvTweq.js";import"./ToolbarRootContext-5tRY-prW.js";import"./getDisabledMountTransitionStyles-D5dXOzgC.js";import"./getPseudoElementBounds-Br8tb0sy.js";import"./chevron-down-D5J97Xaa.js";import"./index-DZ8Usuwg.js";import"./error-D0UPEL3v.js";import"./BaseCbacBanner-BJEX1-t0.js";import"./makeExternalStore-CcSZq8Dl.js";import"./Tooltip-CTgBYqFc.js";import"./PopoverPopup-D98de9Kk.js";import"./debounce-BeGpfOBp.js";import"./useOsdkClient-CLewU869.js";import"./tick-CxynzRts.js";import"./DropdownField-BYx0xJl-.js";import"./isEqual-CbjpySH_.js";import"./withOsdkMetrics-hTvMF2O-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
