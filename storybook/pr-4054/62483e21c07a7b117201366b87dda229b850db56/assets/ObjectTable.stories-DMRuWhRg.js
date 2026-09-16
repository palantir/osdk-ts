import{j as i}from"./iframe-CVz_WeOC.js";import{O as p}from"./object-table-Ch1VePdD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-W3yp_MC7.js";import"./preload-helper-D0q6PXbw.js";import"./Table-DXgezDNO.js";import"./index-BDflHgEd.js";import"./Dialog-BKUzTIkl.js";import"./cross-C8noeNqn.js";import"./svgIconContainer-D2LVORHL.js";import"./useBaseUiId-tRRlvhxI.js";import"./InternalBackdrop-hiDKfjs3.js";import"./composite-Dj-vL0W9.js";import"./index-DIHi61Zo.js";import"./index-Cd-fS6dr.js";import"./index-BW7Ibqv5.js";import"./useEventCallback-BowLlq6N.js";import"./SkeletonBar-D4YfVhlj.js";import"./LoadingCell-CKoVF5V4.js";import"./ColumnConfigDialog-DAql2Ux-.js";import"./DraggableList-CIcSt22Q.js";import"./search-DCAwdpsl.js";import"./Input-BT5FMPCr.js";import"./useControlled-D3k60qqO.js";import"./Button-DhCGu5I6.js";import"./small-cross-Bl3UDKAT.js";import"./ActionButton-By1jCsLC.js";import"./Checkbox-Bycu1fn1.js";import"./useValueChanged-CH5NOABR.js";import"./CollapsiblePanel-wiPKjvqv.js";import"./MultiColumnSortDialog-CrQt-CJ-.js";import"./MenuTrigger-B5gMglGI.js";import"./CompositeItem-D5028N7a.js";import"./ToolbarRootContext-BUfksNXb.js";import"./getDisabledMountTransitionStyles-CM3FK5cI.js";import"./getPseudoElementBounds-BQgoGGXw.js";import"./chevron-down-D7PojQw9.js";import"./index-BZxaJOaP.js";import"./error-DIsBLczr.js";import"./BaseCbacBanner-gkWm0dQw.js";import"./makeExternalStore-CChDsTbl.js";import"./Tooltip-Bvg92253.js";import"./PopoverPopup-CMdx60IF.js";import"./debounce-l5vaE6ps.js";import"./useOsdkClient-DylnfcpV.js";import"./tick-DKNFoxMi.js";import"./DropdownField-BcK9lDxz.js";import"./isEqual-CrVurfmr.js";import"./withOsdkMetrics-h90fRcpC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
