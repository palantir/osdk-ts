import{j as i}from"./iframe-C_XIQRaj.js";import{O as p}from"./object-table-BjgJV20o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-phCZdz.js";import"./preload-helper-yovbOiJH.js";import"./Table-pt3kJltT.js";import"./index-BeXNZw_x.js";import"./Dialog-UHsoLMa-.js";import"./cross-CUZU2tfy.js";import"./svgIconContainer-BNlRuGAK.js";import"./useBaseUiId-8inAF2n-.js";import"./InternalBackdrop-CVa7hO1U.js";import"./composite-DGI-ix3e.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./index-BBWBYdHe.js";import"./useEventCallback-DLCeib9r.js";import"./SkeletonBar-yWafqoD-.js";import"./LoadingCell-BAIKpw62.js";import"./ColumnConfigDialog-1AGcRHyc.js";import"./DraggableList-BC3BFZpg.js";import"./search-BE01uCTT.js";import"./Input-DAnQbmer.js";import"./useControlled-Ch9SndTb.js";import"./Button-dB7_sFTC.js";import"./small-cross-38kc_Q0Y.js";import"./ActionButton-D6EEbVJD.js";import"./Checkbox-Cefn8fFv.js";import"./useValueChanged-DzcQQ31i.js";import"./CollapsiblePanel-DHt-foUT.js";import"./MultiColumnSortDialog-Ck74_Wvq.js";import"./MenuTrigger-CsFi9KLa.js";import"./CompositeItem-BQROqFNc.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./getDisabledMountTransitionStyles-BNbLHEBU.js";import"./getPseudoElementBounds-17tz2fhi.js";import"./chevron-down-9VTaJsMC.js";import"./index-DW1hnjgV.js";import"./error-B-SAi68c.js";import"./BaseCbacBanner-gyGh-cKU.js";import"./makeExternalStore-CTMv2DMh.js";import"./Tooltip-C9o7ip4U.js";import"./PopoverPopup-tjx05EUI.js";import"./debounce-C9ttcPrX.js";import"./useOsdkClient-DX8nswLQ.js";import"./tick-C4shc0EI.js";import"./DropdownField-oiVuVzvB.js";import"./isEqual-BXyydvGq.js";import"./withOsdkMetrics-CVYgQ3H4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
