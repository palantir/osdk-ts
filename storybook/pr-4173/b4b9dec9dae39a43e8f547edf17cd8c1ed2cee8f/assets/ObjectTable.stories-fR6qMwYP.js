import{j as i}from"./iframe-CQxG3cCC.js";import{O as p}from"./object-table-CEnnfMHs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5k5SvAM.js";import"./preload-helper-BQhDaTv1.js";import"./Table-DCPdNfEv.js";import"./index-DxGOzCTx.js";import"./Dialog-zCLS7zrb.js";import"./cross-csp5HbTE.js";import"./svgIconContainer-BhtEOhwo.js";import"./useBaseUiId-Dt5sayHU.js";import"./InternalBackdrop-BDvtcNtG.js";import"./composite-UnoLR2xI.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./index-CevcsHHZ.js";import"./useEventCallback-BWLI-kIT.js";import"./SkeletonBar-D53oWcoz.js";import"./LoadingCell-D065Pqzq.js";import"./ColumnConfigDialog-CfGoxzT9.js";import"./DraggableList-BOE3DziB.js";import"./search-XsOT8fX6.js";import"./Input-IKU9NsaD.js";import"./useControlled-DBmpvbx5.js";import"./Button-D1svI8Md.js";import"./small-cross-Di7hpAGJ.js";import"./ActionButton-DEiZAioH.js";import"./Checkbox-CGOgc_Ub.js";import"./useValueChanged-BuXo7lzh.js";import"./CollapsiblePanel-DXkCbcz8.js";import"./MultiColumnSortDialog-bnt2o6ZC.js";import"./MenuTrigger-DyhMK_-E.js";import"./CompositeItem-D3C5uQt7.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./getDisabledMountTransitionStyles-BMquo6lw.js";import"./getPseudoElementBounds-DyrNCMLJ.js";import"./chevron-down-C-j45_ex.js";import"./index-DRHTc7Po.js";import"./error-DvI5aFF7.js";import"./BaseCbacBanner-zZK_yycM.js";import"./makeExternalStore-ez4Tjxbk.js";import"./Tooltip-Ci2fxdP1.js";import"./PopoverPopup-eKDhhN4E.js";import"./debounce-BJEoAQfk.js";import"./useOsdkClient-rcUQfTvQ.js";import"./tick-gN8njJQM.js";import"./DropdownField-9ziBfdgv.js";import"./isEqual-CvFNBvPf.js";import"./withOsdkMetrics-CA86lKjW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
