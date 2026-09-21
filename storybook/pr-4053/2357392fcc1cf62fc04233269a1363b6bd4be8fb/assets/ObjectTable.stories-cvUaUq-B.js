import{j as i}from"./iframe-8nXJMjDB.js";import{O as p}from"./object-table-C1y8_Cff.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqwYuqcu.js";import"./preload-helper-CJKRkHxR.js";import"./Table-cSlmjIo0.js";import"./index-DJbKq1-5.js";import"./Dialog-CeUIfP7J.js";import"./cross-CpVH0STr.js";import"./svgIconContainer-olalqAcz.js";import"./useBaseUiId-DpDF9vet.js";import"./InternalBackdrop-BwllQc25.js";import"./composite-Bp-oM0Et.js";import"./index-CEoWz6xw.js";import"./index-2q5Mchef.js";import"./index-BXuWsT-u.js";import"./useEventCallback-Cb1n4noc.js";import"./SkeletonBar-D3HcZ6cf.js";import"./LoadingCell-DNVjwROJ.js";import"./ColumnConfigDialog-DP_5GMTQ.js";import"./DraggableList-BYVD_cJw.js";import"./search-Bnief77D.js";import"./Input-QBUJ65eb.js";import"./useControlled-CUJ7pCf5.js";import"./Button-BIf78uDw.js";import"./small-cross-7ULJZ0Aq.js";import"./ActionButton-BVPquFXf.js";import"./Checkbox-Cv4_Iq6h.js";import"./useValueChanged-Dzpnds2M.js";import"./CollapsiblePanel-C7gxpTye.js";import"./MultiColumnSortDialog-B0xMWyyj.js";import"./MenuTrigger-BwWfXhSx.js";import"./CompositeItem-CfRgOFRs.js";import"./ToolbarRootContext-BLLK3VJo.js";import"./getDisabledMountTransitionStyles-yJ-bhU6o.js";import"./getPseudoElementBounds-BTPVoCRU.js";import"./chevron-down-Cc9laCGb.js";import"./index-C0-gYeVA.js";import"./error-BhxtiV9P.js";import"./BaseCbacBanner-KbhteuMc.js";import"./makeExternalStore-DMgVpl9f.js";import"./Tooltip-DYQoxjoJ.js";import"./PopoverPopup-iFnEjeGR.js";import"./debounce-CLt3Mm3K.js";import"./useOsdkClient-DlZIRDE7.js";import"./tick-DDh-ihWu.js";import"./DropdownField-C3Grldi_.js";import"./isEqual-B38MWf1z.js";import"./withOsdkMetrics-C8MRYO6c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
