import{j as i}from"./iframe-DIhyjTQM.js";import{O as p}from"./object-table-Do9vu6qj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJal3r8f.js";import"./preload-helper-BITLElC1.js";import"./Table-aMp3ITaO.js";import"./index-C8ppAklG.js";import"./Dialog-x7P9gPjA.js";import"./cross-BVmbGj7v.js";import"./svgIconContainer-BVwGEvqe.js";import"./useBaseUiId-BRDIOgH7.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./useEventCallback-DgKocnhe.js";import"./SkeletonBar-C2TvSpMI.js";import"./LoadingCell-D7P3o9XJ.js";import"./ColumnConfigDialog-Q9snLBuv.js";import"./DraggableList-Dob7Rq-X.js";import"./search-D7TMRqS5.js";import"./Input-BCY1gssj.js";import"./useControlled-vI7L-1v7.js";import"./Button-BU0w-MK8.js";import"./small-cross-DVOzGHDB.js";import"./ActionButton-CSRmV5rV.js";import"./Checkbox-eblkHSax.js";import"./useValueChanged-1EPjCJhD.js";import"./CollapsiblePanel-B7QE2-21.js";import"./MultiColumnSortDialog-DTofYe8C.js";import"./MenuTrigger-CyZDawNi.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./chevron-down-fg_D-X7z.js";import"./index-GGFmpVOs.js";import"./error-BcXd4Yso.js";import"./BaseCbacBanner-O8eKc9DG.js";import"./makeExternalStore-DUGVOR6Q.js";import"./Tooltip-Ce_ARAEV.js";import"./PopoverPopup-C4G8tLd2.js";import"./debounce-xNmml4RO.js";import"./useOsdkClient-ChFpCrqs.js";import"./tick-xU5_Eoim.js";import"./DropdownField-CNUfmwbR.js";import"./isEqual-BnA4SERm.js";import"./withOsdkMetrics-DKqvGaZy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
