import{j as i}from"./iframe-Tb86ZRmF.js";import{O as p}from"./object-table-BV4hXuTI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgsrLPeo.js";import"./preload-helper-DfbZGOZ6.js";import"./Table-BC91fjfJ.js";import"./index-Dnqd7J8g.js";import"./Dialog-C670hlwL.js";import"./cross-CCAZO53q.js";import"./svgIconContainer-DJKDb-5p.js";import"./useBaseUiId-DEBuPtLc.js";import"./InternalBackdrop-Bhys3WAZ.js";import"./composite-DV_gLhz3.js";import"./index-sYybngkU.js";import"./index-CmiZFNOU.js";import"./index-DzMh4JUH.js";import"./useEventCallback-44hTJD3Z.js";import"./SkeletonBar-C9jEOxoG.js";import"./LoadingCell-BGS5yipP.js";import"./ColumnConfigDialog-Dojt5IjM.js";import"./DraggableList-DkwoEc61.js";import"./search-L-ymspTn.js";import"./Input-Khmtvi3_.js";import"./useControlled-B1TwbK1C.js";import"./Button-CLo15qID.js";import"./small-cross-3q1WModJ.js";import"./ActionButton-BMukdQVj.js";import"./Checkbox-BojkLLsG.js";import"./useValueChanged-BgcKIQxd.js";import"./CollapsiblePanel-DmSY5GnO.js";import"./MultiColumnSortDialog-CkRkKP_G.js";import"./MenuTrigger-BM1y1Qj7.js";import"./CompositeItem-m28j8eMj.js";import"./ToolbarRootContext-BZOu2fTP.js";import"./getDisabledMountTransitionStyles-DO_qV-fs.js";import"./getPseudoElementBounds-DnJUwswI.js";import"./chevron-down-Cc6F0Nf0.js";import"./index-BU-9JmZp.js";import"./error-Bv1qHWgX.js";import"./BaseCbacBanner-Cxj2gyfs.js";import"./makeExternalStore-BlPRehW9.js";import"./Tooltip-DJRSuFpF.js";import"./PopoverPopup-BsjOHC5X.js";import"./debounce-BPiUJ-4q.js";import"./useOsdkClient-DkM13ykF.js";import"./tick-UdFgVdYE.js";import"./DropdownField-BqvRNL9c.js";import"./isEqual-bqxSBOhE.js";import"./withOsdkMetrics-C3T6RJD2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
