import{j as i}from"./iframe-O0prbF-O.js";import{O as p}from"./object-table-CyA9NVMi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-WqpaBlIT.js";import"./preload-helper-BqjLgX7i.js";import"./Table-DfMGlvWA.js";import"./index-D3_kNOcu.js";import"./Dialog-BOTrMu9R.js";import"./cross-EqH9AD7w.js";import"./svgIconContainer-D708LBZG.js";import"./useBaseUiId-CF66BVsU.js";import"./InternalBackdrop-DBKeGWdw.js";import"./composite-CBSaDCOL.js";import"./index-DlLn8lVY.js";import"./index-CO7cUuHh.js";import"./index-Cb14-kzt.js";import"./useEventCallback-CI7uH06C.js";import"./SkeletonBar-BoocyUZM.js";import"./LoadingCell-4o2z_nRc.js";import"./ColumnConfigDialog-BnMcit-A.js";import"./DraggableList-CbxkUNCT.js";import"./search-BZRyw4sv.js";import"./Input-DALr2Z65.js";import"./useControlled-DTs4YsMd.js";import"./Button-B2dXrYMV.js";import"./small-cross-3PczLChY.js";import"./ActionButton-DlLbzVoC.js";import"./Checkbox-CUIX5M1x.js";import"./useValueChanged-BA2LO4xE.js";import"./CollapsiblePanel-BEvSUTtF.js";import"./MultiColumnSortDialog-C2vJ_N3H.js";import"./MenuTrigger-0pjqaEFx.js";import"./CompositeItem-Cx6Y5iRt.js";import"./ToolbarRootContext-B9PiDCp_.js";import"./getDisabledMountTransitionStyles-Dxu7DtWP.js";import"./getPseudoElementBounds-xaQ_TG8i.js";import"./chevron-down-NYKhWxp5.js";import"./index-JUBariVe.js";import"./error-CBnxuMvh.js";import"./BaseCbacBanner-CX3faeRn.js";import"./makeExternalStore-DO75Ws4H.js";import"./Tooltip-BcwYOBDs.js";import"./PopoverPopup-C8bmh7JY.js";import"./toNumber-mpunM_CU.js";import"./useOsdkClient-D80isL3g.js";import"./tick-a2QdToMK.js";import"./DropdownField-a5Wh6R5w.js";import"./withOsdkMetrics-h2oIPj-a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
