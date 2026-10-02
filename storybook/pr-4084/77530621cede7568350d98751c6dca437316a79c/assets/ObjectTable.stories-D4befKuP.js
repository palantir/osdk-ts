import{j as i}from"./iframe-CBBfontH.js";import{O as p}from"./object-table-D00hhH1n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXA0mGAd.js";import"./preload-helper-C9XLNiex.js";import"./Table-Dq4sIwo_.js";import"./index-BK79uKA4.js";import"./Dialog-Bez2GmQV.js";import"./cross-FHMV1Mb9.js";import"./svgIconContainer-DticknVs.js";import"./useBaseUiId-D3hM4v_U.js";import"./InternalBackdrop-Bhw3AVLQ.js";import"./composite-B8aA5vzU.js";import"./index-C2T6QgIM.js";import"./index-CD1w3ijm.js";import"./index-BVDezsvr.js";import"./useEventCallback-BwO2T9OZ.js";import"./SkeletonBar-CleAdRcI.js";import"./LoadingCell-C5GvXRpf.js";import"./ColumnConfigDialog-DjY86Eyb.js";import"./DraggableList-BcoMav9O.js";import"./search-l34gwdLO.js";import"./Input-CnWoOgAt.js";import"./useControlled-DaI-bqFd.js";import"./Button-BzMH9WPr.js";import"./small-cross-B2CUI9TY.js";import"./ActionButton-X94BlYS6.js";import"./Checkbox-stvUx_jr.js";import"./useValueChanged-BW_ZWeBx.js";import"./CollapsiblePanel-PXa-ow1L.js";import"./MultiColumnSortDialog-CW3J4Whf.js";import"./MenuTrigger-Bdw45WiW.js";import"./CompositeItem-DvZr4Fnk.js";import"./ToolbarRootContext-DlEp5yGp.js";import"./getDisabledMountTransitionStyles-DCBtf9ru.js";import"./getPseudoElementBounds-Dewf_zh7.js";import"./chevron-down-BeGAiI5e.js";import"./index-Ddgk7NGU.js";import"./error-BFkl_rh_.js";import"./BaseCbacBanner-CglxUYEK.js";import"./makeExternalStore-D8kr4lHx.js";import"./Tooltip-kEuvMNv7.js";import"./PopoverPopup-Bx6Q7Dee.js";import"./debounce-BRaC803f.js";import"./useOsdkClient-CKOOY0Rx.js";import"./tick-B05HzIpP.js";import"./DropdownField-BFYkkAFZ.js";import"./isEqual-C-yu64RW.js";import"./withOsdkMetrics-vNqbOsIn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
