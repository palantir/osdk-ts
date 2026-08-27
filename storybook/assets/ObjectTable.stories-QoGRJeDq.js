import{j as i}from"./iframe-DbqyfEpT.js";import{O as p}from"./object-table-Dew9_BCD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCgLzUFF.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CbRA1MLt.js";import"./index-DXCImGV3.js";import"./Dialog-CMyfvdap.js";import"./cross-B4u0_v8A.js";import"./svgIconContainer-BeMYhW5y.js";import"./useBaseUiId-DOBNQZSS.js";import"./InternalBackdrop-BppENXZo.js";import"./composite-DLhe-Jn_.js";import"./index-BKOBkvBW.js";import"./index-CqQVZqBR.js";import"./index-DKwFbfLR.js";import"./useEventCallback-BOXba5-9.js";import"./SkeletonBar-CT56I8l3.js";import"./LoadingCell-DyjLUt0J.js";import"./ColumnConfigDialog-ABiTi9sK.js";import"./DraggableList-Dcun8_bD.js";import"./search-C4sRLKui.js";import"./Input-Bb36fr0S.js";import"./useControlled-3R4FDQ1-.js";import"./Button-D6iKZuwX.js";import"./small-cross-BKymWZKQ.js";import"./ActionButton-o8yF2Kx3.js";import"./Checkbox-D1QzlLNZ.js";import"./useValueChanged-ClgxGk8N.js";import"./CollapsiblePanel-DuorPJkU.js";import"./MultiColumnSortDialog-BW3zIbZT.js";import"./MenuTrigger-Ce7ldmZi.js";import"./CompositeItem-pt-Agyrs.js";import"./ToolbarRootContext-Cz4TE7JJ.js";import"./getDisabledMountTransitionStyles-axPgQXbs.js";import"./getPseudoElementBounds-DDAbSkfW.js";import"./chevron-down-BZavjwn-.js";import"./index-BPz5ga9u.js";import"./error-DmLEJ7LA.js";import"./BaseCbacBanner-Yz2WdOYZ.js";import"./makeExternalStore-Bfg6k2dl.js";import"./Tooltip-FO5R604L.js";import"./PopoverPopup-BQ5kZ_Z7.js";import"./debounce-DRTpIDWD.js";import"./useOsdkClient-BvViJLPG.js";import"./tick-DHzl-Jfy.js";import"./DropdownField-D7wJSxdM.js";import"./isEqual-Conb4iRJ.js";import"./withOsdkMetrics-DIB0jy1n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
