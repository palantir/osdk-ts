import{j as i}from"./iframe-BRewJKLI.js";import{O as p}from"./object-table-D5TlWZ46.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DciyqXfB.js";import"./preload-helper-Th7jsi9T.js";import"./Table-Dc0qfuKa.js";import"./index-CsEIXvZI.js";import"./Dialog-DaDhDBbi.js";import"./cross-CRuUYbdJ.js";import"./svgIconContainer-YEGGrYC5.js";import"./useBaseUiId-BirOMeO-.js";import"./InternalBackdrop-BPogiAuS.js";import"./composite-DPZfXKt9.js";import"./index-CdNujWPa.js";import"./index-DLtzTCbX.js";import"./index-DhG0LkJ4.js";import"./useEventCallback-DBAxwR-4.js";import"./SkeletonBar-BqTc4Ala.js";import"./LoadingCell-YHsTiX7l.js";import"./ColumnConfigDialog-BGrtzyJ_.js";import"./DraggableList-vym7ucgl.js";import"./search-CNN9U08N.js";import"./Input-Dfhle3pE.js";import"./useControlled-BuUPxEIC.js";import"./isEqual-D6mfypIN.js";import"./isObject-Dc4jCNfw.js";import"./Button-D-a4uE4Q.js";import"./ActionButton-C5TNkQ1_.js";import"./Checkbox-Cd_u_cft.js";import"./useValueChanged-2DZs80zy.js";import"./CollapsiblePanel-jZGrsHaA.js";import"./MultiColumnSortDialog-d_cl-_yn.js";import"./MenuTrigger-TkYbVTdx.js";import"./CompositeItem-8uv7pmSI.js";import"./ToolbarRootContext-5hsijlsK.js";import"./getDisabledMountTransitionStyles-CLgG3HXO.js";import"./getPseudoElementBounds-BP7MwREj.js";import"./chevron-down-C8r7y8He.js";import"./index-B-MYbMMb.js";import"./error-DE-DySAz.js";import"./BaseCbacBanner-qKzx03a8.js";import"./makeExternalStore-BJhUGNS3.js";import"./Tooltip-Bpropqbk.js";import"./PopoverPopup-BiGoYvvc.js";import"./toNumber-CG15L9if.js";import"./useOsdkClient-DI0Ym6Cu.js";import"./tick-ROx4W5IJ.js";import"./DropdownField-BEiOxIDI.js";import"./withOsdkMetrics-DXH1scdv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
