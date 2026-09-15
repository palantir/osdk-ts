import{j as i}from"./iframe-DjTsTlya.js";import{O as p}from"./object-table-BH4m2DVb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ATG-g3QQ.js";import"./preload-helper-DOwvcOZH.js";import"./Table-DeDjgQkN.js";import"./index-CRTtk6ac.js";import"./Dialog-CJA--hLR.js";import"./cross-Cvq5D40f.js";import"./svgIconContainer-xPgA_yJ1.js";import"./useBaseUiId-BzNc-3Ql.js";import"./InternalBackdrop-pUIcFmU-.js";import"./composite-0nzRqKiC.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./index-BHnNwPKM.js";import"./useEventCallback-B8IjVnQ6.js";import"./SkeletonBar-CR9uI5kM.js";import"./LoadingCell-KFngOTg4.js";import"./ColumnConfigDialog-BdmQ5e1p.js";import"./DraggableList-C_6AaAoA.js";import"./search-Bt_OBQnD.js";import"./Input-D8ax6gQv.js";import"./useControlled-BVHEmv7i.js";import"./Button-DyYtieLu.js";import"./small-cross-CKizW9rD.js";import"./ActionButton-BZbmOJWh.js";import"./Checkbox-DRakJNAH.js";import"./useValueChanged-B-nMYLan.js";import"./CollapsiblePanel-BpE-bZTw.js";import"./MultiColumnSortDialog-CMuXKD4i.js";import"./MenuTrigger-Caw-fYwa.js";import"./CompositeItem-BuvWaDdm.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./getDisabledMountTransitionStyles-BA0waCP-.js";import"./getPseudoElementBounds-DKRYw-Sa.js";import"./chevron-down-Crh_WC6g.js";import"./index-C3payG2R.js";import"./error-DgpTog1A.js";import"./BaseCbacBanner-BB7djwNT.js";import"./makeExternalStore-Dm9B4aPC.js";import"./Tooltip-H4kLk5D5.js";import"./PopoverPopup-CH71VGBG.js";import"./debounce-DVG0b2wL.js";import"./useOsdkClient-BaZTHlJk.js";import"./tick-CbhTJk3v.js";import"./DropdownField-BBpsDicP.js";import"./isEqual-BsYIHLNh.js";import"./withOsdkMetrics-BW3QL-zG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
