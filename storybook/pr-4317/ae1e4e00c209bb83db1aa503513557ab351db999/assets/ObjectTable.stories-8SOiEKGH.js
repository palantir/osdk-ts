import{j as i}from"./iframe-CgfdIm0T.js";import{O as p}from"./object-table-DrnlDv9c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-dPfDVQKL.js";import"./preload-helper-C8qWAL46.js";import"./Table-DUMakJ11.js";import"./index-BeSyGo3F.js";import"./Dialog-U0YBM8su.js";import"./cross-CWciybKu.js";import"./svgIconContainer-DQ0tbGLY.js";import"./useBaseUiId-BuuF3bkV.js";import"./InternalBackdrop-qMgkwTyz.js";import"./composite-CUpx3Hda.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./index-BYKYJzqq.js";import"./useEventCallback-roPvTisA.js";import"./SkeletonBar-BRUSZP5d.js";import"./LoadingCell-CpCzQijd.js";import"./ColumnConfigDialog-CoKK8VcE.js";import"./DraggableList-Dr8Zz3hH.js";import"./search-DENXSVyb.js";import"./Input-BG9nzqHz.js";import"./useControlled-B0N5dBnJ.js";import"./Button-CVc3RSfH.js";import"./small-cross-DX0KVrVi.js";import"./ActionButton-CcLOh3Yb.js";import"./Checkbox-DTTupP5N.js";import"./useValueChanged-0xGZfbNw.js";import"./CollapsiblePanel-CNv0K6GO.js";import"./MultiColumnSortDialog-C6XaIndo.js";import"./MenuTrigger-DZtYSqfe.js";import"./CompositeItem-BTF_cTSf.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./getDisabledMountTransitionStyles-COYOVfxZ.js";import"./getPseudoElementBounds-FnH3Aw9k.js";import"./chevron-down-CiBD6Dqi.js";import"./index-BBcDpAeT.js";import"./error-Bu8LxMV7.js";import"./BaseCbacBanner-C_N-7cgH.js";import"./makeExternalStore-BNPt347_.js";import"./Tooltip-ygywzpjU.js";import"./PopoverPopup-DlHSMVYr.js";import"./debounce-DQksQltd.js";import"./useOsdkClient-B3iR8qwm.js";import"./tick-hxPJxWFp.js";import"./DropdownField-BMHyrqgr.js";import"./isEqual-D3J8sFzN.js";import"./withOsdkMetrics-BU1Vym1S.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
