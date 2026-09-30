import{j as i}from"./iframe-CrH6Yrlk.js";import{O as p}from"./object-table-BPcfv3yy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CqjNipEr.js";import"./preload-helper-DWN1nqfF.js";import"./Table-CW_7u1wJ.js";import"./index-BLeB2LZ4.js";import"./Dialog-B2Toa9ee.js";import"./cross-Djpe7veO.js";import"./svgIconContainer-BOBFAYEP.js";import"./useBaseUiId-DxKrUPMo.js";import"./InternalBackdrop-tytdnIli.js";import"./composite-ffO3RfE4.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./index-DJX0kPHb.js";import"./useEventCallback-Df7dMb-i.js";import"./SkeletonBar-BggMzaAo.js";import"./LoadingCell-AZ9SDyIy.js";import"./ColumnConfigDialog-B63qw4h6.js";import"./DraggableList-4ck5OTAl.js";import"./search-C_RAyaII.js";import"./Input-CO-EhnoV.js";import"./useControlled-BHyUcUtS.js";import"./Button-ChVjuzMV.js";import"./small-cross-Cp0wS207.js";import"./ActionButton-CAVnXpdM.js";import"./Checkbox-Dq_71KbB.js";import"./useValueChanged-C8WmnglJ.js";import"./CollapsiblePanel-CNe4nG1I.js";import"./MultiColumnSortDialog-BeVa_ST7.js";import"./MenuTrigger-CVFoNL-1.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./getDisabledMountTransitionStyles-LOYR3VUX.js";import"./getPseudoElementBounds-ZRt3Q6Bd.js";import"./chevron-down-Do4cSabx.js";import"./index-ow98vrD3.js";import"./error-Bb5TXnmt.js";import"./BaseCbacBanner-C8xIu8HD.js";import"./makeExternalStore-CiLIO8iU.js";import"./Tooltip-DRTjcE2d.js";import"./PopoverPopup-BR1F8fHw.js";import"./debounce-rtZgYy1G.js";import"./useOsdkClient-JKeEr8fH.js";import"./tick-CQI3-0jK.js";import"./DropdownField-1LHzPopr.js";import"./isEqual-Df-8D6e-.js";import"./withOsdkMetrics-B1PE_2r3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
