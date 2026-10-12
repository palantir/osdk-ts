import{j as i}from"./iframe-BxrMAPhN.js";import{O as p}from"./object-table-kLrWn1bD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAhYp7hh.js";import"./preload-helper-DrnFR1_M.js";import"./Table-_lbqKSTc.js";import"./index-3ce-DqIm.js";import"./Dialog-C8L9xW1b.js";import"./cross-CgUMfDbf.js";import"./svgIconContainer-BTC4I1jP.js";import"./useBaseUiId-CYhkk9Wl.js";import"./InternalBackdrop-fby99vEC.js";import"./composite-Dd7hy379.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./index-CUS5I621.js";import"./useEventCallback-ztQWmBPn.js";import"./SkeletonBar-Dijlhnp9.js";import"./LoadingCell-Beq5gjYy.js";import"./ColumnConfigDialog-DCt_o6YG.js";import"./DraggableList-B_XL0fvE.js";import"./search-DDIdgg65.js";import"./Input-B49f-IH3.js";import"./useControlled-CBAJvoho.js";import"./Button-BHjA9vXD.js";import"./small-cross-DcC-nrRa.js";import"./ActionButton-CV_MAkW4.js";import"./Checkbox-ccqMIQBw.js";import"./useValueChanged-kVe0_w2P.js";import"./CollapsiblePanel-Dc01KugY.js";import"./MultiColumnSortDialog-DNdkPCtc.js";import"./MenuTrigger-Dpo_htYB.js";import"./CompositeItem-DrJtYX8s.js";import"./ToolbarRootContext-BseqN11S.js";import"./getDisabledMountTransitionStyles-CmE2wGB-.js";import"./getPseudoElementBounds-DT1sYSxK.js";import"./chevron-down-vMhLf0Yn.js";import"./index-B8D9hLY9.js";import"./error-AaI7Sssv.js";import"./BaseCbacBanner-CLTovdFm.js";import"./makeExternalStore-BOIpe8LX.js";import"./Tooltip-NlgzcR6l.js";import"./PopoverPopup-VtScEPpW.js";import"./debounce-B6IFkGZ6.js";import"./useOsdkClient-BmkTGWD1.js";import"./tick-F7U5QknT.js";import"./DropdownField-Dn-sPpxO.js";import"./isEqual-BBx3w4Uo.js";import"./withOsdkMetrics-PY8DhDl3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
