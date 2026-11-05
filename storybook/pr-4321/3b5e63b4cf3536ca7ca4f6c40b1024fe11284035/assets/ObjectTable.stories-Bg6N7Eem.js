import{j as i}from"./iframe-DyhO41Rj.js";import{O as p}from"./object-table-CnkMaw8t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Da7B6pvy.js";import"./preload-helper-CIbx8URd.js";import"./Table-DdVB3AgN.js";import"./index-DwI7CQqH.js";import"./Dialog-CNd6Q5dO.js";import"./cross-CrdS3els.js";import"./svgIconContainer-DEkY-HLY.js";import"./useBaseUiId-Bew9-MTU.js";import"./InternalBackdrop-FIq_NBf8.js";import"./composite-Brg7gMZI.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./index-EkCVf_dq.js";import"./useEventCallback-7-xYdRK3.js";import"./SkeletonBar-Bpd-j5zt.js";import"./LoadingCell-BvfQZvK_.js";import"./ColumnConfigDialog-e1j5Aaw0.js";import"./DraggableList-CEQggg39.js";import"./search-D8ph0Tmj.js";import"./Input-dlG_yuK1.js";import"./useControlled-BDcMaUKC.js";import"./Button-fa-PaPuc.js";import"./small-cross-DjI62rJX.js";import"./ActionButton-DMioYdTS.js";import"./Checkbox-DUBSVtNO.js";import"./useValueChanged-CMrkkb4b.js";import"./CollapsiblePanel-C9_ojemY.js";import"./MultiColumnSortDialog-Bu_hNZRG.js";import"./MenuTrigger-Du-AWTD8.js";import"./CompositeItem-B1D8TqxB.js";import"./ToolbarRootContext-CekAQhO_.js";import"./getDisabledMountTransitionStyles-DgZyOtdd.js";import"./getPseudoElementBounds-BJc2NM_P.js";import"./chevron-down-D6leDeN-.js";import"./index-DVDXXnZb.js";import"./error-DLjCGmmk.js";import"./BaseCbacBanner-svJHwMB0.js";import"./makeExternalStore-CEyr08K1.js";import"./Tooltip-BFvNQrGe.js";import"./isObject-Bu43GTjb.js";import"./debounce-IRvapgvb.js";import"./useOsdkClient-CaJv5Gl-.js";import"./tick-DgUcKmPU.js";import"./DropdownField-vXp1_pry.js";import"./isEqual-DB1uUQ8K.js";import"./_baseIsEqual-C1rqwiMB.js";import"./withOsdkMetrics-rGISHWN9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
