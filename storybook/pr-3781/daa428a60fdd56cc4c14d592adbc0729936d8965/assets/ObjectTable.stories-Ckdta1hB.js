import{j as i}from"./iframe-CdXRgAZ5.js";import{O as p}from"./object-table-CN8kwCL4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cv37vUxz.js";import"./preload-helper-CitRRdiQ.js";import"./Table-CDJRnX7-.js";import"./index-D9vry920.js";import"./Dialog-DchmYRhm.js";import"./cross-BSpE7ik9.js";import"./svgIconContainer-DDpGR0K9.js";import"./useBaseUiId-C4Byj8B0.js";import"./InternalBackdrop-DO-4mexr.js";import"./composite-in5-wL5z.js";import"./index-EqByydDb.js";import"./index-ltWxUmJy.js";import"./index-CNFDJENd.js";import"./useEventCallback-Bz8KBaS5.js";import"./SkeletonBar-Yb2Ri3_7.js";import"./LoadingCell-Dg6H086G.js";import"./ColumnConfigDialog-DbRCU5iz.js";import"./DraggableList-DYta_Y7r.js";import"./search-CBule6p8.js";import"./Input-CSHvQsfp.js";import"./useControlled-DSrBRiZ_.js";import"./Button-vMf8G5_Y.js";import"./small-cross-DywfSgOm.js";import"./ActionButton-D_fOZp6Y.js";import"./Checkbox-DC-aG5Bo.js";import"./useValueChanged-BKvMUlXV.js";import"./CollapsiblePanel-O4VAn8Gx.js";import"./MultiColumnSortDialog-BRiBPLiI.js";import"./MenuTrigger-ow0lXlSw.js";import"./CompositeItem-DuqUtFNG.js";import"./ToolbarRootContext-D-BSwljH.js";import"./getDisabledMountTransitionStyles-T20fe8L9.js";import"./getPseudoElementBounds-DDHCJymJ.js";import"./chevron-down-BymEN6Iw.js";import"./index-B4exONM0.js";import"./error-DZGmcMd6.js";import"./BaseCbacBanner-DQSCEX4v.js";import"./makeExternalStore-D0rHK4H4.js";import"./Tooltip-BrmNiBdj.js";import"./PopoverPopup-DD3bpHRz.js";import"./debounce-nRF8PGBP.js";import"./useOsdkClient-DfLv09Cv.js";import"./tick-B4Cn5MSM.js";import"./DropdownField-Dc5QpqIC.js";import"./isEqual-CkwefDw5.js";import"./withOsdkMetrics-DQE_UW0r.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
