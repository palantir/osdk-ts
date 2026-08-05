import{j as i}from"./iframe-D0RhBbJ7.js";import{O as p}from"./object-table-B2fqQp0N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-yRDTWxCy.js";import"./preload-helper-B4Xh17S2.js";import"./Table-CGxKeYPS.js";import"./index-D2Roz-9u.js";import"./Dialog-Babq4ltF.js";import"./cross-BW6hDEvA.js";import"./svgIconContainer-DuD4Mtb3.js";import"./useBaseUiId-T9aew-gX.js";import"./InternalBackdrop-xQTgedTo.js";import"./composite-B8QHgAvj.js";import"./index-j6SYw05A.js";import"./index-CxHqbhkx.js";import"./index-Bn0niQE2.js";import"./useEventCallback-DIb7RwpK.js";import"./SkeletonBar-DVDQ5O4X.js";import"./LoadingCell-CyocpwIK.js";import"./ColumnConfigDialog-nAo7pdLn.js";import"./DraggableList-BY2D44VA.js";import"./search-DRKOfXxF.js";import"./Input-CFIey-mK.js";import"./useControlled-BjciqBy6.js";import"./isEqual-TZ_78gjt.js";import"./isObject-BkOSfPK7.js";import"./Button-DB4dzGoL.js";import"./ActionButton-GLIuGSHH.js";import"./Checkbox-xVZfPybI.js";import"./useValueChanged-D_z1TQ_P.js";import"./CollapsiblePanel-C2d1N9XC.js";import"./MultiColumnSortDialog-Cn2hHO2h.js";import"./MenuTrigger-nLp5S_0_.js";import"./CompositeItem-BY-oynxC.js";import"./ToolbarRootContext-u1w7Gkl9.js";import"./getDisabledMountTransitionStyles-B0ANbSyH.js";import"./getPseudoElementBounds-D1fr0bY0.js";import"./chevron-down-DHSkS5E6.js";import"./index-CLNQopGb.js";import"./error-CRtUKBZI.js";import"./BaseCbacBanner-BAQdsUKn.js";import"./makeExternalStore-DPu8JMdK.js";import"./Tooltip-CIoxrFJN.js";import"./PopoverPopup-Bgai_nPn.js";import"./toNumber-DITuDXSM.js";import"./useOsdkClient-B41RwrWJ.js";import"./tick-BxjHAf9W.js";import"./DropdownField-RKVrx_8m.js";import"./withOsdkMetrics-B0Rjn456.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
