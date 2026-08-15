import{j as i}from"./iframe-DHWh16X0.js";import{O as p}from"./object-table-DAbsA5PW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CqzYWUXV.js";import"./preload-helper-CsMbAkrZ.js";import"./Table-B_H74Mo5.js";import"./index-EFIkBK0s.js";import"./Dialog-DOovsxfV.js";import"./cross-BclIt3wI.js";import"./svgIconContainer-QMaziiJ4.js";import"./useBaseUiId-CXEibAEQ.js";import"./InternalBackdrop-iZCd9FIB.js";import"./composite-tY4yE9Ik.js";import"./index-DZ3wCjjT.js";import"./index-BzT39WQ1.js";import"./index-OHk2TEvp.js";import"./useEventCallback-CFsJyHsQ.js";import"./SkeletonBar-BlJYFG81.js";import"./LoadingCell-Bz3wen_t.js";import"./ColumnConfigDialog-C2uZ7fP0.js";import"./DraggableList-D8z_FKqA.js";import"./search-CVsDG0lr.js";import"./Input-CErdghMM.js";import"./useControlled-Do1VjKsf.js";import"./Button-kRRLhT0h.js";import"./small-cross-BFNfkq-P.js";import"./ActionButton-GS4dBomP.js";import"./Checkbox-BAcXSDKE.js";import"./useValueChanged-B_yuBVxb.js";import"./CollapsiblePanel-C2dptN9G.js";import"./MultiColumnSortDialog-DzDXjAjN.js";import"./MenuTrigger-C8U6EMiR.js";import"./CompositeItem-DpZ7DPTP.js";import"./ToolbarRootContext-BomQbyQ9.js";import"./getDisabledMountTransitionStyles-CoX1zJYc.js";import"./getPseudoElementBounds-CvyqUhgM.js";import"./chevron-down-Co2wTi8S.js";import"./index-BrQ95iqV.js";import"./error-06ET36ME.js";import"./BaseCbacBanner-DhCUB6kw.js";import"./makeExternalStore-CRShQ3yp.js";import"./Tooltip-B04aXvOe.js";import"./PopoverPopup-X70xNO2C.js";import"./debounce-Db6BCj8m.js";import"./useOsdkClient-BmUHRCNB.js";import"./tick-D83m4_aJ.js";import"./DropdownField-Bak4Vaav.js";import"./isEqual-Bl3OYj3-.js";import"./withOsdkMetrics-C4DH-JGk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
