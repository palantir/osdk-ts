import{j as i}from"./iframe-CwsgVFCh.js";import{O as p}from"./object-table-C338F0bO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5Qlev3E.js";import"./preload-helper-CFSh68y9.js";import"./Table-DcT1TpTg.js";import"./index-5CttHDeo.js";import"./Dialog-Bt_1mYPz.js";import"./cross-BQFX_VX8.js";import"./svgIconContainer--s4psY3b.js";import"./useBaseUiId-D1XXa7jM.js";import"./InternalBackdrop-BYzrstKF.js";import"./composite-Db_ix37N.js";import"./index-a2I8F2uY.js";import"./index-D0vP1fQ0.js";import"./index-TPNwtvZJ.js";import"./useEventCallback-DyJVdp0X.js";import"./SkeletonBar-CinRKwk8.js";import"./LoadingCell-C68LxTQT.js";import"./ColumnConfigDialog-DzEv6HHg.js";import"./DraggableList-BCv3SQ5l.js";import"./search-DAKGrLou.js";import"./Input-B-wPEXqD.js";import"./useControlled-CqLyQtsI.js";import"./Button-BSlSVUqe.js";import"./small-cross-BDslcscW.js";import"./ActionButton-DkVTFO3n.js";import"./Checkbox-Dh8iT8_Q.js";import"./useValueChanged-D7ydevuv.js";import"./CollapsiblePanel-Cw7sZI2N.js";import"./MultiColumnSortDialog-CZjB73DR.js";import"./MenuTrigger-C5d97H-v.js";import"./CompositeItem-DIa4PUtj.js";import"./ToolbarRootContext-Dw0uD7co.js";import"./getDisabledMountTransitionStyles-C_NRg-Tj.js";import"./getPseudoElementBounds-DpaMjhZC.js";import"./chevron-down-BMdcdoDb.js";import"./index-qogJWmY0.js";import"./error-CmS0UiVl.js";import"./BaseCbacBanner-C-IUGGMI.js";import"./makeExternalStore-Dc3Ewax5.js";import"./Tooltip-XPKwMzcZ.js";import"./PopoverPopup-BIZlm-w6.js";import"./debounce-Chi5i-8k.js";import"./useOsdkClient-C7m-TFMr.js";import"./tick-Dx_dQdyQ.js";import"./DropdownField-FtqUvMk5.js";import"./isEqual-C5Sf6OVH.js";import"./withOsdkMetrics-aGd8eMoT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
