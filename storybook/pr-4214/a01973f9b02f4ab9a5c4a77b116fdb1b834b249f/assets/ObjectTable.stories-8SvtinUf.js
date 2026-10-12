import{j as i}from"./iframe-DQ-Ez-qG.js";import{O as p}from"./object-table-DI1IchAR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-uzSTyg.js";import"./preload-helper-DbSstiuK.js";import"./Table-0s9Hh2Qy.js";import"./index-BXE1O0xs.js";import"./Dialog-CybwZ66j.js";import"./cross-UZvPpSxI.js";import"./svgIconContainer-B-U6T-6a.js";import"./useBaseUiId-SgVzRrNW.js";import"./InternalBackdrop-DMP_qe1B.js";import"./composite-BiRiw1GR.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./index-D0HpUEtr.js";import"./useEventCallback-BIHXGnti.js";import"./SkeletonBar-DugVqGn-.js";import"./LoadingCell-DATetjrQ.js";import"./ColumnConfigDialog-CSQmRJhb.js";import"./DraggableList-CdBCLWZn.js";import"./search-67zYXUAs.js";import"./Input-DJaKEaOT.js";import"./useControlled-CTxFJ2Pw.js";import"./Button-CEhBDWA2.js";import"./small-cross-BMEseqYj.js";import"./ActionButton-gGre5Rrx.js";import"./Checkbox-D_IiJIC9.js";import"./useValueChanged-Bp8kvkvX.js";import"./CollapsiblePanel-UEtpZfSu.js";import"./MultiColumnSortDialog-DkEwyEYT.js";import"./MenuTrigger-DOBbIFFg.js";import"./CompositeItem-DdY16ynU.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./getDisabledMountTransitionStyles-CADlu38g.js";import"./getPseudoElementBounds-fzrtgOLH.js";import"./chevron-down-COv6kIer.js";import"./index-e-PI1xG5.js";import"./error-BvUwAVRc.js";import"./BaseCbacBanner-BhAOZWr2.js";import"./makeExternalStore-JHGUKVEV.js";import"./Tooltip-BPBaOiL7.js";import"./PopoverPopup-rO1C9fPG.js";import"./debounce-CqA-XlMm.js";import"./useOsdkClient-CFdl-q-C.js";import"./tick-Co47VK84.js";import"./DropdownField-DYQWWJ9Y.js";import"./isEqual-DJrJLYBW.js";import"./withOsdkMetrics-CUCSCii1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
