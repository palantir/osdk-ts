import{j as i}from"./iframe-B0SOl9ZV.js";import{O as p}from"./object-table-BVSXtLSE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-J8rWCHTA.js";import"./preload-helper-BHPAddH5.js";import"./Table-BvDS4c0a.js";import"./index-BiNVgaeG.js";import"./Dialog-C9hlGazr.js";import"./cross-EbYogpml.js";import"./svgIconContainer-C62ArtWi.js";import"./useBaseUiId-Cljp77-Q.js";import"./InternalBackdrop-CdRNiUEL.js";import"./composite-Bi62CtsD.js";import"./index-DhnWwm5N.js";import"./index-s1ThTeww.js";import"./index-BGC6gPcW.js";import"./useEventCallback-DhnxrJyA.js";import"./SkeletonBar-DfvXzO1u.js";import"./LoadingCell-FD66O8fh.js";import"./ColumnConfigDialog-nt-WhUk0.js";import"./DraggableList-DLH-URIr.js";import"./search-BOXs6zTK.js";import"./Input-xkP_-geA.js";import"./useControlled-uGEWPr36.js";import"./Button-D1fyFKQB.js";import"./small-cross-CRCr07F7.js";import"./ActionButton-ZDCLmiwx.js";import"./Checkbox-CZzBbIjY.js";import"./useValueChanged-C0D0XVl7.js";import"./CollapsiblePanel-CSF-4VPX.js";import"./MultiColumnSortDialog-BPZP6UX1.js";import"./MenuTrigger-BNFoDht_.js";import"./CompositeItem-CbcwFtua.js";import"./ToolbarRootContext-BztT65HJ.js";import"./getDisabledMountTransitionStyles-DkjU5PNl.js";import"./getPseudoElementBounds-Jb9fY2h-.js";import"./chevron-down-DeS6ZUJh.js";import"./index-BZ0ka-wa.js";import"./error-B-XxEkbd.js";import"./BaseCbacBanner-niCJ2eTF.js";import"./makeExternalStore-BI9SKXsC.js";import"./Tooltip-Be0QnVh0.js";import"./PopoverPopup-CPu-iQjW.js";import"./debounce-DZ5vJTmK.js";import"./useOsdkClient-Cv8DLbFD.js";import"./tick-DxEKvdzo.js";import"./DropdownField-D0dhUGVa.js";import"./isEqual-CP8GwWxC.js";import"./withOsdkMetrics-DL2t3tni.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
