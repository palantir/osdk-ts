import{j as i}from"./iframe-Dwq9wrDt.js";import{O as p}from"./object-table-C0ojvj8Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cj6_l3XQ.js";import"./preload-helper-B1owdDsL.js";import"./Table-x4X088dP.js";import"./index-DH5QrWNc.js";import"./Dialog-Da6AXT6s.js";import"./cross-bOMperPh.js";import"./svgIconContainer-D0D9W8JM.js";import"./useBaseUiId-B7nN8GdQ.js";import"./InternalBackdrop-BIJmIlb_.js";import"./composite-CEGLGHiv.js";import"./index-D7NxJNil.js";import"./index-CP796jUP.js";import"./index-eQsJMTxi.js";import"./useEventCallback-B19JLpmu.js";import"./SkeletonBar-Dy6nnuXU.js";import"./LoadingCell-DjTJg32u.js";import"./ColumnConfigDialog-DCbw1UJH.js";import"./DraggableList-Z-EWa3FS.js";import"./search-BMSwG6Z-.js";import"./Input-Cx88AEdI.js";import"./useControlled-Fc1Z38Dl.js";import"./Button-D7JoiY-s.js";import"./small-cross-j8rJd5Xm.js";import"./ActionButton-Dr4qYGQO.js";import"./Checkbox-C4c4w8i1.js";import"./useValueChanged-CN4VeO_p.js";import"./CollapsiblePanel-CBIF_eeh.js";import"./MultiColumnSortDialog-B_xMJUsx.js";import"./MenuTrigger-DidvGjJV.js";import"./CompositeItem-C4EX3fG2.js";import"./ToolbarRootContext-D7rqNdCo.js";import"./getDisabledMountTransitionStyles-DLK9eHUM.js";import"./getPseudoElementBounds-DO-6sdCU.js";import"./chevron-down-BvKwnLh6.js";import"./index-C3biqhR2.js";import"./error-OKwjq5IS.js";import"./BaseCbacBanner-DinZMws6.js";import"./makeExternalStore-CaAgBHnr.js";import"./Tooltip-BzDmJOWp.js";import"./PopoverPopup-CV_eEi5d.js";import"./debounce-C4VhubKr.js";import"./useOsdkClient-Cr99Bnja.js";import"./tick-ARaqt1U4.js";import"./DropdownField-CQYHMIv6.js";import"./isEqual-FoUaro_7.js";import"./withOsdkMetrics-DWFHC7AK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
