import{j as i}from"./iframe-D150H4vz.js";import{O as p}from"./object-table-DP4wjFEO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjsthZtH.js";import"./preload-helper-BarckMkV.js";import"./Table-gGJNwpbp.js";import"./index-cVrSJLbz.js";import"./Dialog-GeD2sG_1.js";import"./cross-6mUh6O0a.js";import"./svgIconContainer-VUxlTV2E.js";import"./useBaseUiId-BEwnCbr0.js";import"./InternalBackdrop-D-pm-OPY.js";import"./composite-B_0CI6wq.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./index-B1h1Ffvc.js";import"./useEventCallback-CBWL1hY-.js";import"./SkeletonBar-CvwasmzM.js";import"./LoadingCell-CV767y0j.js";import"./ColumnConfigDialog-BVWNFeUZ.js";import"./DraggableList-Bzc3U9HD.js";import"./search-B_D2n4ON.js";import"./Input-D0LXp2w8.js";import"./useControlled-lhlupqEn.js";import"./Button-wEOF9kbC.js";import"./small-cross-OFGcSSBP.js";import"./ActionButton-YzMno_H9.js";import"./Checkbox-CXCLecrd.js";import"./useValueChanged-CN5YLtWf.js";import"./CollapsiblePanel-CA9S5PKs.js";import"./MultiColumnSortDialog-BFMBTEvA.js";import"./MenuTrigger-CxpIKNcn.js";import"./CompositeItem-iPCNYUwO.js";import"./ToolbarRootContext-G9KEnSun.js";import"./getDisabledMountTransitionStyles-5KUPlXNs.js";import"./getPseudoElementBounds-CVhzJWTU.js";import"./chevron-down-BtdYGIbe.js";import"./index-CwtLN-AV.js";import"./error-EjSx_YOh.js";import"./BaseCbacBanner-DH3oT3a9.js";import"./makeExternalStore-BIWQlVyv.js";import"./Tooltip-BMJ7R0dC.js";import"./PopoverPopup-B10GF7su.js";import"./debounce-_Huulw1P.js";import"./useOsdkClient-Dsa6FFc4.js";import"./tick-CYEAeUON.js";import"./DropdownField-StYPCDOl.js";import"./isEqual-Cu2b5RlF.js";import"./withOsdkMetrics-BMpR6FdW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
