import{j as i}from"./iframe-C4U2JRoY.js";import{O as p}from"./object-table-C8YPtxGL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CYzJtGJ3.js";import"./preload-helper-DN3ZEv3h.js";import"./Table-DemeUw8L.js";import"./index-sST8iqoh.js";import"./Dialog-CxbAQOcE.js";import"./cross-BjW1gIQB.js";import"./svgIconContainer-Bqyk4ukb.js";import"./useBaseUiId-t75_1mYb.js";import"./InternalBackdrop-DLXodZp2.js";import"./composite-DyzBkCx-.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./index-C6xQgxB6.js";import"./useEventCallback-DztBvHUA.js";import"./SkeletonBar-CA43xrQl.js";import"./LoadingCell-CeMmlt8X.js";import"./ColumnConfigDialog-B_DBv9UA.js";import"./DraggableList-f63FvW7O.js";import"./search-DGpCoBRn.js";import"./Input-Bt5QmGO0.js";import"./useControlled-DgRL6il9.js";import"./Button-_EOncV-8.js";import"./small-cross-CD5bCdAl.js";import"./ActionButton-NrurrT_q.js";import"./Checkbox-B0bJPmc0.js";import"./useValueChanged-CVpGeeut.js";import"./CollapsiblePanel-e6QLkFeN.js";import"./MultiColumnSortDialog-DxmTCiTh.js";import"./MenuTrigger-Ds-m-Ojk.js";import"./CompositeItem-2E0ykI3P.js";import"./ToolbarRootContext-BAVcRF15.js";import"./getDisabledMountTransitionStyles-BTRmRtbC.js";import"./getPseudoElementBounds-Gnx7A5W2.js";import"./chevron-down-dh5AFKhr.js";import"./index-DXHuqct4.js";import"./error-CEamcZeP.js";import"./BaseCbacBanner-DOipROPK.js";import"./makeExternalStore-BDSIsETy.js";import"./Tooltip-CcfNdB-z.js";import"./PopoverPopup-DnvLtuHj.js";import"./debounce-X49geldC.js";import"./useOsdkClient-BAmivmrL.js";import"./tick-BWNn2Zwm.js";import"./DropdownField-DM7w76cT.js";import"./isEqual-UzAaeF-g.js";import"./withOsdkMetrics-DqoHWRxV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
