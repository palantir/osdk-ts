import{j as i}from"./iframe-bRpqvs55.js";import{O as p}from"./object-table-DTJeYCjX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tNB6VnYm.js";import"./preload-helper-C6x1Ezwe.js";import"./Table-pzOwgnpp.js";import"./index-BIhwktUh.js";import"./Dialog-BUuRiFkm.js";import"./cross-W-3E-IIi.js";import"./svgIconContainer-Bb8sMP7z.js";import"./useBaseUiId-DlF45aum.js";import"./InternalBackdrop-JgiXSQHJ.js";import"./composite-eCHjWiuj.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./index-BOSpr031.js";import"./useEventCallback-6oyiY6oL.js";import"./SkeletonBar-DJvvFheA.js";import"./LoadingCell-ktQQDCh9.js";import"./ColumnConfigDialog-BuMSNPk8.js";import"./DraggableList-C-GVw4zx.js";import"./search-CyiikVap.js";import"./Input-prVuRYoh.js";import"./useControlled-Bp_OFH7Y.js";import"./Button-0l6_p_5m.js";import"./small-cross-DEvpNvc7.js";import"./ActionButton-Dy3mGQhY.js";import"./Checkbox-BUsUHpSL.js";import"./useValueChanged-5Fh0Mmuj.js";import"./CollapsiblePanel-_w77ihX2.js";import"./MultiColumnSortDialog-B3hai6Pi.js";import"./MenuTrigger-CvmpGqAN.js";import"./CompositeItem-Cz1caG-o.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./getDisabledMountTransitionStyles-Cafoyzdu.js";import"./getPseudoElementBounds-CX56f88n.js";import"./chevron-down-hYv0Ya8W.js";import"./index-sU6oAp9b.js";import"./error-DYIwcxmR.js";import"./BaseCbacBanner-r5IeGzMT.js";import"./makeExternalStore-BuZjAFov.js";import"./Tooltip-BmDPAYhk.js";import"./PopoverPopup-DKbTsux3.js";import"./debounce-BIS8_Qcl.js";import"./useOsdkClient-BUIu772_.js";import"./tick-BJJF7W42.js";import"./DropdownField-BIZpi39T.js";import"./isEqual-BzRAwugt.js";import"./withOsdkMetrics-BMXSfQyV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
