import{j as i}from"./iframe-j08fV6dz.js";import{O as p}from"./object-table-D0aqCmoe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbWZoXVV.js";import"./preload-helper-BGl13g2I.js";import"./Table-DGpvKX3S.js";import"./index-CWHssFJB.js";import"./Dialog-Bx1tL4sT.js";import"./cross-CoN6-ekW.js";import"./svgIconContainer-YCYSEUhp.js";import"./useBaseUiId-CplXrATv.js";import"./InternalBackdrop-DZLfLAx9.js";import"./composite-D8eTqwE5.js";import"./index-C5nt5hOV.js";import"./index-kp1WZsxE.js";import"./index-Bq-uEYwJ.js";import"./useEventCallback-B4fw5bnT.js";import"./SkeletonBar-D7gl1oaW.js";import"./LoadingCell-QeinshAp.js";import"./ColumnConfigDialog-DC855AY_.js";import"./DraggableList-BabylKSA.js";import"./search-ClQdTzkO.js";import"./Input-DhrpnbAE.js";import"./useControlled-CHR2SRbk.js";import"./Button-DpHwku46.js";import"./small-cross-B4PHUogj.js";import"./ActionButton-BEQq70gP.js";import"./Checkbox-DO2v6AWI.js";import"./useValueChanged-DtEqK2bI.js";import"./CollapsiblePanel-BooDUqDc.js";import"./MultiColumnSortDialog-CzL3h7dk.js";import"./MenuTrigger-DjCmUySM.js";import"./CompositeItem-BGXPo5gO.js";import"./ToolbarRootContext-CtzwSIgo.js";import"./getDisabledMountTransitionStyles-CBnNedNN.js";import"./getPseudoElementBounds-Bdf_5u_d.js";import"./chevron-down-Doe0Cvk6.js";import"./index-DHqM0ir-.js";import"./error-D_bwL8by.js";import"./BaseCbacBanner-CPz003VT.js";import"./makeExternalStore-D_d4tJsc.js";import"./Tooltip-C6gafiZv.js";import"./PopoverPopup-DBdryem6.js";import"./debounce-DRljlDql.js";import"./useOsdkClient-DBxZJFUJ.js";import"./tick-DOh48VMM.js";import"./DropdownField-B_PRVOpm.js";import"./isEqual-MzBwduGE.js";import"./withOsdkMetrics-d653yHww.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
